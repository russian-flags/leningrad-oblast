import { createFlagImage } from "../image.js";
const src = new URL("../flags/gatchina.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0413\u0430\u0442\u0447\u0438\u043D\u0430", options);
}
var gatchina_default = createImage;
export {
  createImage,
  gatchina_default as default,
  src
};
