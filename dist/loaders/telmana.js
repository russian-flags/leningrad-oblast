import { createFlagImage } from "../image.js";
const src = new URL("../flags/telmana.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0422\u0435\u043B\u044C\u043C\u0430\u043D\u0430", options);
}
var telmana_default = createImage;
export {
  createImage,
  telmana_default as default,
  src
};
