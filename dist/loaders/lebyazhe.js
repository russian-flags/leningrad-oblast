import { createFlagImage } from "../image.js";
const src = new URL("../flags/lebyazhe.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041B\u0435\u0431\u044F\u0436\u044C\u0435", options);
}
var lebyazhe_default = createImage;
export {
  createImage,
  lebyazhe_default as default,
  src
};
