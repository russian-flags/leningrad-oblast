import assert from "node:assert/strict";
import { createFlagImage } from "../dist/image.js";
import { installTestImage } from "./helpers/test-image.js";

const ImageCtor = installTestImage();

const defaultImage = createFlagImage("/flags/vyborg.svg", "Флаг Выборг");
assert.ok(defaultImage instanceof ImageCtor);
assert.equal(defaultImage.src, "/flags/vyborg.svg");
assert.equal(defaultImage.alt, "Флаг Выборг");
assert.equal(defaultImage.decoding, "async");
assert.equal(defaultImage.loading, "lazy");

const customImage = createFlagImage("/flags/vyborg.svg", "Флаг Выборг", {
  alt: "Флаг города Выборг",
  decoding: "sync",
  loading: "eager",
  className: "flag-image",
  title: "Выборг",
  id: "vyborg-flag",
  width: 320,
  height: 200,
  style: {
    objectFit: "contain",
    backgroundColor: "transparent",
    borderWidth: null,
  },
  dataset: {
    slug: "vyborg",
    index: 1,
    active: true,
    hidden: false,
  },
  attributes: {
    "aria-hidden": true,
    "data-id": 123,
    draggable: false,
    role: null,
  },
});

assert.equal(customImage.alt, "Флаг города Выборг");
assert.equal(customImage.decoding, "sync");
assert.equal(customImage.loading, "eager");
assert.equal(customImage.className, "flag-image");
assert.equal(customImage.title, "Выборг");
assert.equal(customImage.id, "vyborg-flag");
assert.equal(customImage.width, 320);
assert.equal(customImage.height, 200);

assert.equal(customImage.style.values.get("object-fit"), "contain");
assert.equal(customImage.style.values.get("background-color"), "transparent");
assert.equal(customImage.style.values.has("border-width"), false);

assert.equal(customImage.dataset.slug, "vyborg");
assert.equal(customImage.dataset.index, "1");
assert.equal(customImage.dataset.active, "");
assert.equal("hidden" in customImage.dataset, false);

assert.equal(customImage.getAttribute("aria-hidden"), "");
assert.equal(customImage.getAttribute("data-id"), "123");
assert.equal(customImage.getAttribute("draggable"), null);
assert.equal(customImage.getAttribute("role"), null);
