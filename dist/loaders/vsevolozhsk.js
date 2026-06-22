import { createFlagImage } from "../image.js";
const src = new URL("../flags/vsevolozhsk.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u0441\u0435\u0432\u043E\u043B\u043E\u0436\u0441\u043A", options);
}
var vsevolozhsk_default = createImage;
export {
  createImage,
  vsevolozhsk_default as default,
  src
};
