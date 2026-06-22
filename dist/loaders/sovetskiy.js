import { createFlagImage } from "../image.js";
const src = new URL("../flags/sovetskiy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0439", options);
}
var sovetskiy_default = createImage;
export {
  createImage,
  sovetskiy_default as default,
  src
};
