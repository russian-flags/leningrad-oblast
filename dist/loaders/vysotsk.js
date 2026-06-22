import { createFlagImage } from "../image.js";
const src = new URL("../flags/vysotsk.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u044B\u0441\u043E\u0446\u043A", options);
}
var vysotsk_default = createImage;
export {
  createImage,
  vysotsk_default as default,
  src
};
