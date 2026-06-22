import { createFlagImage } from "../image.js";
const src = new URL("../flags/kuznechnoe.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0443\u0437\u043D\u0435\u0447\u043D\u043E\u0435", options);
}
var kuznechnoe_default = createImage;
export {
  createImage,
  kuznechnoe_default as default,
  src
};
