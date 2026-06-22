import type { FlagImageOptions } from "./types.js";
/**
 * Создаёт `HTMLImageElement` для SVG-флага.
 *
 * Функция не добавляет изображение в DOM: она только создаёт и настраивает `<img>`.
 * По умолчанию используются `loading="lazy"`, `decoding="async"` и переданный `defaultAlt`.
 *
 * Через `FlagImageOptions` можно переопределить alt, CSS-класс, title, id, размеры,
 * inline-стили, dataset и произвольные HTML-атрибуты.
 */
export declare function createFlagImage(src: string, defaultAlt: string, options?: FlagImageOptions): HTMLImageElement;
