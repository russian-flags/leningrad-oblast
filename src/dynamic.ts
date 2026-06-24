import type { FlagImageOptions, FlagModule, SettlementInput } from "./types.js";
import { flagLoaders } from "./flagLoaders.js";
import { resolveSettlementSlug } from "./meta.js";

/**
 * Возвращает ленивый ESM-загрузчик модуля флага.
 *
 * На вход можно передать slug, код, русское/английское название или alias населённого пункта.
 * Возвращает `undefined`, если населённый пункт не найден.
 */
export function getFlagModuleLoader(input: SettlementInput): (() => Promise<FlagModule>) | undefined {
  const slug = resolveSettlementSlug(input);
  return slug ? flagLoaders[slug] : undefined;
}

/**
 * Лениво импортирует модуль флага для населённого пункта.
 *
 * Используйте эту функцию, если нужен доступ к SVG URL и фабрике изображения.
 * Для обычного сценария с готовым `<img>` удобнее `loadFlagImage` или `loadFlag`.
 *
 * @throws Если slug, код, название или alias населённого пункта неизвестны.
 */
export async function loadFlagModule(input: SettlementInput): Promise<FlagModule> {
  const loader = getFlagModuleLoader(input);
  if (!loader) {
    throw new Error(`Unknown Leningrad Oblast settlement: ${String(input)}`);
  }
  return loader();
}

/**
 * Лениво загружает флаг населённого пункта и возвращает готовый `HTMLImageElement`.
 *
 * По умолчанию созданное изображение использует `loading="lazy"` и `decoding="async"`.
 * Через `FlagImageOptions` можно переопределить alt, CSS-класс, размеры, dataset,
 * стили или произвольные атрибуты.
 *
 * @throws Если slug, код, название или alias населённого пункта неизвестны.
 */
export async function loadFlagImage(input: SettlementInput, options?: FlagImageOptions): Promise<HTMLImageElement> {
  const module = await loadFlagModule(input);
  return module.createImage(options);
}

/**
 * Запускает загрузку модуля флага без ожидания результата.
 *
 * Полезно на hover, focus или незадолго до появления строки во viewport.
 * Неизвестные населённые пункты игнорируются.
 */
export function preloadFlag(input: SettlementInput): void {
  void getFlagModuleLoader(input)?.();
}

/** Алиас для `loadFlagImage`. */
export const loadFlag = loadFlagImage;
