import { createFlagImage } from "../image.js";
const src = new URL("../flags/druzhnaya-gorka.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0414\u0440\u0443\u0436\u043D\u0430\u044F \u0413\u043E\u0440\u043A\u0430", options);
}
var druzhnaya_gorka_default = createImage;
export {
  createImage,
  druzhnaya_gorka_default as default,
  src
};
