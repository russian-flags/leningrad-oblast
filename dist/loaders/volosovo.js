import { createFlagImage } from "../image.js";
const src = new URL("../flags/volosovo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u043E\u043B\u043E\u0441\u043E\u0432\u043E", options);
}
var volosovo_default = createImage;
export {
  createImage,
  volosovo_default as default,
  src
};
