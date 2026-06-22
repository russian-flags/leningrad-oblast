import { createFlagImage } from "../image.js";
const src = new URL("../flags/kingisepp.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0438\u043D\u0433\u0438\u0441\u0435\u043F\u043F", options);
}
var kingisepp_default = createImage;
export {
  createImage,
  kingisepp_default as default,
  src
};
