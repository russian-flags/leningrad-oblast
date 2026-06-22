import { createFlagImage } from "../image.js";
const src = new URL("../flags/lodeynoe-pole.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041B\u043E\u0434\u0435\u0439\u043D\u043E\u0435 \u041F\u043E\u043B\u0435", options);
}
var lodeynoe_pole_default = createImage;
export {
  createImage,
  lodeynoe_pole_default as default,
  src
};
