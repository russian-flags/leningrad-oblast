import { loadFlag, preloadFlag, settlements } from "@russian-flags/leningrad-oblast";
function requiredNode(selector) {
  const node = document.querySelector(selector);
  if (!node) {
    throw new Error(`Example DOM is missing required node: ${selector}`);
  }
  return node;
}
const list = requiredNode("#flagsList");
const summary = requiredNode("#summary");
const flagModal = requiredNode("#flagModal");
const flagModalTitle = requiredNode("#flagModalTitle");
const flagModalImage = requiredNode("#flagModalImage");
const flagModalClose = requiredNode(".flag-modal__close");
const loaded = /* @__PURE__ */ new Set();
const nameCollator = new Intl.Collator("ru");
const settlementBySlug = new Map(settlements.map((settlement) => [settlement.slug, settlement]));
let rowObserver;
function sortedSettlements() {
  return [...settlements].sort((left, right) => nameCollator.compare(left.nameRu, right.nameRu));
}
function makeCell(className, children) {
  const cell = document.createElement("td");
  if (className) {
    cell.className = className;
  }
  cell.append(...children);
  return cell;
}
function makePlaceCell(settlement) {
  const name = document.createElement("strong");
  name.textContent = settlement.nameRu;
  return makeCell("place", [name]);
}
function makeIdentifierCell(settlement) {
  const code = document.createElement("strong");
  code.textContent = settlement.code;
  const slug = document.createElement("span");
  slug.textContent = settlement.slug;
  return makeCell("identifier", [code, slug]);
}
function makeFlagCell() {
  const frame = document.createElement("button");
  frame.className = "flag-frame pending";
  frame.type = "button";
  frame.dataset.kind = "flag";
  frame.textContent = "lazy";
  return makeCell("flag-cell", [frame]);
}
function makeFormatCell(settlement) {
  const extension = document.createElement("strong");
  extension.textContent = "SVG";
  const details = document.createElement("span");
  details.textContent = `flags/${settlement.slug}.svg`;
  details.title = details.textContent;
  return makeCell("format", [extension, details]);
}
function makeRow(settlement) {
  const row = document.createElement("tr");
  row.dataset.slug = settlement.slug;
  row.append(
    makePlaceCell(settlement),
    makeIdentifierCell(settlement),
    makeFlagCell(),
    makeFormatCell(settlement)
  );
  row.addEventListener("pointerenter", () => preloadFlag(settlement.slug), { once: true });
  row.addEventListener("focusin", () => preloadFlag(settlement.slug), { once: true });
  return row;
}
function updateSummary() {
  summary.textContent = `${settlements.length} \u043D\u0430\u0441\u0435\u043B\u0451\u043D\u043D\u044B\u0445 \u043F\u0443\u043D\u043A\u0442\u043E\u0432, ${settlements.length} SVG-\u0444\u043B\u0430\u0433\u043E\u0432, \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0447\u0430\u043D\u043A\u043E\u0432: ${loaded.size}`;
}
function renderImageError(frame) {
  frame.classList.add("load-error");
  frame.replaceChildren("\u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F");
}
function openFlagModal(image, settlement) {
  flagModalTitle.textContent = settlement.nameRu;
  flagModalImage.src = image.currentSrc || image.src;
  flagModalImage.alt = `\u0424\u043B\u0430\u0433 ${settlement.nameRu}`;
  if (typeof flagModal.showModal === "function") {
    flagModal.showModal();
  } else {
    flagModal.setAttribute("open", "");
  }
}
async function hydrateRow(row) {
  if (row.dataset.loaded === "true") {
    return;
  }
  const slug = row.dataset.slug;
  const settlement = slug ? settlementBySlug.get(slug) : void 0;
  if (!slug || !settlement) {
    return;
  }
  const image = await loadFlag(slug, {
    alt: `\u0424\u043B\u0430\u0433 ${settlement.nameRu}`,
    title: `flags/${slug}.svg`
  });
  image.addEventListener("error", () => {
    const frame2 = row.querySelector('[data-kind="flag"]');
    if (frame2) {
      renderImageError(frame2);
    }
  }, { once: true });
  const frame = row.querySelector('[data-kind="flag"]');
  if (frame) {
    frame.classList.remove("pending");
    frame.replaceChildren(image);
    frame.addEventListener("click", () => openFlagModal(image, settlement));
  }
  loaded.add(slug);
  row.dataset.loaded = "true";
  updateSummary();
}
function observeRows() {
  rowObserver?.disconnect();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          void hydrateRow(entry.target);
        }
      }
    },
    { rootMargin: "360px 0px" }
  );
  rowObserver = observer;
  for (const row of list.querySelectorAll("tr[data-slug]")) {
    observer.observe(row);
  }
}
function render() {
  list.replaceChildren(...sortedSettlements().map(makeRow));
  updateSummary();
  observeRows();
}
flagModalClose.addEventListener("click", () => {
  flagModal.close();
});
flagModal.addEventListener("click", (event) => {
  if (event.target === flagModal) {
    flagModal.close();
  }
});
render();
