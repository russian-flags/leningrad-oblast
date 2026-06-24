import assert from "node:assert/strict";
import {
  normalizeSettlementInput,
  resolveSettlementSlug,
  settlementSlugs,
  settlements,
} from "../dist/meta.js";

assert.ok(Object.isFrozen(settlements), "settlements should be frozen");
assert.ok(Object.isFrozen(settlementSlugs), "settlementSlugs should be frozen");
assert.ok(settlements.length > 0, "settlements should not be empty");
assert.equal(settlementSlugs.length, settlements.length);
assert.deepEqual(
  settlementSlugs,
  settlements.map((settlement) => settlement.slug)
);
assert.equal(new Set(settlementSlugs).size, settlementSlugs.length);

assert.equal(normalizeSettlementInput("  SOSNOVYY_BOR  "), "sosnovyy-bor");
assert.equal(normalizeSettlementInput("YANINO_1"), "yanino-1");
assert.equal(normalizeSettlementInput("Пикалёво"), "пикалево");

for (const settlement of settlements) {
  assert.equal(typeof settlement.nameRu, "string");
  assert.equal(typeof settlement.nameEn, "string");
  assert.ok(Array.isArray(settlement.aliases), "settlement aliases should be an array");
  assert.equal(resolveSettlementSlug(settlement.slug), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.code), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.nameRu), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.nameEn), settlement.slug);
  for (const alias of settlement.aliases) {
    assert.equal(resolveSettlementSlug(alias), settlement.slug);
  }
}

assert.equal(resolveSettlementSlug(" VYBORG "), "vyborg");
assert.equal(resolveSettlementSlug("Volkhov"), "volhov");
assert.equal(resolveSettlementSlug("Sosnovy Bor"), "sosnovyy-bor");
assert.equal(resolveSettlementSlug("Fyodorovskoye"), "fedorovskoe");
assert.equal(resolveSettlementSlug("sosnovyy_bor"), "sosnovyy-bor");
assert.equal(resolveSettlementSlug("Пикалево"), "pikalevo");
assert.equal(resolveSettlementSlug("неизвестный"), undefined);
