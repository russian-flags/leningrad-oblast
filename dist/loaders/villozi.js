import { createFlagImage } from "../image.js";
const src = new URL("../flags/villozi.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u0438\u043B\u043B\u043E\u0437\u0438", options);
}
var villozi_default = createImage;
export {
  createImage,
  villozi_default as default,
  src
};
