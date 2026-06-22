import { createFlagImage } from "../image.js";
const src = new URL("../flags/otradnoe.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041E\u0442\u0440\u0430\u0434\u043D\u043E\u0435", options);
}
var otradnoe_default = createImage;
export {
  createImage,
  otradnoe_default as default,
  src
};
