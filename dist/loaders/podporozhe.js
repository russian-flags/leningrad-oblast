import { createFlagImage } from "../image.js";
const src = new URL("../flags/podporozhe.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041F\u043E\u0434\u043F\u043E\u0440\u043E\u0436\u044C\u0435", options);
}
var podporozhe_default = createImage;
export {
  createImage,
  podporozhe_default as default,
  src
};
