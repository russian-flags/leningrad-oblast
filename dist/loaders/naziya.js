import { createFlagImage } from "../image.js";
const src = new URL("../flags/naziya.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041D\u0430\u0437\u0438\u044F", options);
}
var naziya_default = createImage;
export {
  createImage,
  naziya_default as default,
  src
};
