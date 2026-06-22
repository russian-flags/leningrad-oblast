import type { FlagImageOptions, FlagModule, SettlementInput } from "./types.js";
/**
 * Возвращает ленивый ESM-загрузчик модуля флага.
 *
 * На вход можно передать slug, код или русское название населённого пункта.
 * Возвращает `undefined`, если населённый пункт не найден.
 */
export declare function getFlagModuleLoader(input: SettlementInput): (() => Promise<FlagModule>) | undefined;
/**
 * Лениво импортирует модуль флага для населённого пункта.
 *
 * Используйте эту функцию, если нужен доступ к SVG URL и фабрике изображения.
 * Для обычного сценария с готовым `<img>` удобнее `loadFlagImage` или `loadFlag`.
 *
 * @throws Если slug, код или название населённого пункта неизвестны.
 */
export declare function loadFlagModule(input: SettlementInput): Promise<FlagModule>;
/**
 * Лениво загружает флаг населённого пункта и возвращает готовый `HTMLImageElement`.
 *
 * По умолчанию созданное изображение использует `loading="lazy"` и `decoding="async"`.
 * Через `FlagImageOptions` можно переопределить alt, CSS-класс, размеры, dataset,
 * стили или произвольные атрибуты.
 *
 * @throws Если slug, код или название населённого пункта неизвестны.
 */
export declare function loadFlagImage(input: SettlementInput, options?: FlagImageOptions): Promise<HTMLImageElement>;
/**
 * Запускает загрузку модуля флага без ожидания результата.
 *
 * Полезно на hover, focus или незадолго до появления строки во viewport.
 * Неизвестные населённые пункты игнорируются.
 */
export declare function preloadFlag(input: SettlementInput): void;
/** Алиас для `loadFlagImage`. */
export declare const loadFlag: typeof loadFlagImage;
