import { createFlagImage } from "../image.js";
const src = new URL("../flags/lyuban.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041B\u044E\u0431\u0430\u043D\u044C", options);
}
var lyuban_default = createImage;
export {
  createImage,
  lyuban_default as default,
  src
};
