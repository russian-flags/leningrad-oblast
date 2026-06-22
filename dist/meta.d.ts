import type { SettlementInput, SettlementSlug } from "./types.js";
import { settlements, settlementSlugs } from "./settlements.js";
/**
 * Список населённых пунктов и их slug-идентификаторы.
 *
 * Экспорт из `meta.ts`, чтобы метаданные и поиск были доступны из одной точки входа.
 */
export { settlements, settlementSlugs };
/**
 * Нормализует пользовательский ввод перед поиском населённого пункта.
 *
 * На вход можно передать slug, код или русское название. Функция приводит строку к нижнему регистру,
 * убирает пробелы по краям, заменяет `ё` на `е`, а пробелы и подчёркивания превращает в дефисы.
 */
export declare function normalizeSettlementInput(input: SettlementInput): string;
/**
 * Возвращает slug населённого пункта по slug, коду или русскому названию.
 *
 * Учитывает те же правила нормализации, что и `normalizeSettlementInput`, поэтому принимает варианты
 * вроде `sosnovy-bor`, `sosnovy_bor`, `Сосновый Бор` или названия с буквой `ё`.
 * Возвращает `undefined`, если населённый пункт не найден.
 */
export declare function resolveSettlementSlug(input: SettlementInput): SettlementSlug | undefined;
