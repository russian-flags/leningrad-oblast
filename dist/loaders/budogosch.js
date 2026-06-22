import { createFlagImage } from "../image.js";
const src = new URL("../flags/budogosch.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0411\u0443\u0434\u043E\u0433\u043E\u0449\u044C", options);
}
var budogosch_default = createImage;
export {
  createImage,
  budogosch_default as default,
  src
};
