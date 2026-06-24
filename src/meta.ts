import type { SettlementInput, SettlementSlug } from "./types.js";
import { settlements, settlementSlugs } from "./settlements.js";

/**
 * Список населённых пунктов и их slug-идентификаторы.
 *
 * Экспорт из `meta.ts`, чтобы метаданные и поиск были доступны из одной точки входа.
 */
export { settlements, settlementSlugs };

const aliases = new Map<string, SettlementSlug>();

/**
 * Нормализует пользовательский ввод перед поиском населённого пункта.
 *
 * На вход можно передать slug, код, русское/английское название или alias.
 * Функция приводит строку к нижнему регистру,
 * убирает пробелы по краям, заменяет `ё` на `е`, а пробелы и подчёркивания превращает в дефисы.
 */
export function normalizeSettlementInput(input: SettlementInput): string {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/\u0451/g, "\u0435")
    .replace(/[\s_]+/g, "-");
}

for (const settlement of settlements) {
  for (const value of [
    settlement.slug,
    settlement.code,
    settlement.nameRu,
    settlement.nameEn,
    ...settlement.aliases,
  ]) {
    aliases.set(normalizeSettlementInput(value), settlement.slug);
  }
}

/**
 * Возвращает slug населённого пункта по slug, коду, названию или alias.
 *
 * Учитывает те же правила нормализации, что и `normalizeSettlementInput`, поэтому принимает варианты
 * вроде `sosnovy-bor`, `sosnovy_bor`, `Сосновый Бор`, `Sosnovy Bor` или названия с буквой `ё`.
 * Возвращает `undefined`, если населённый пункт не найден.
 */
export function resolveSettlementSlug(input: SettlementInput): SettlementSlug | undefined {
  return aliases.get(normalizeSettlementInput(input));
}
