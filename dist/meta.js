import { settlements, settlementSlugs } from "./settlements.js";
const aliases = /* @__PURE__ */ new Map();
function normalizeSettlementInput(input) {
  return String(input).trim().toLowerCase().replace(/\u0451/g, "\u0435").replace(/[\s_]+/g, "-");
}
for (const settlement of settlements) {
  aliases.set(normalizeSettlementInput(settlement.slug), settlement.slug);
  aliases.set(normalizeSettlementInput(settlement.code), settlement.slug);
  aliases.set(normalizeSettlementInput(settlement.name), settlement.slug);
  aliases.set(normalizeSettlementInput(settlement.name.replace(/\u0451/g, "\u0435")), settlement.slug);
}
function resolveSettlementSlug(input) {
  return aliases.get(normalizeSettlementInput(input));
}
export {
  normalizeSettlementInput,
  resolveSettlementSlug,
  settlementSlugs,
  settlements
};
