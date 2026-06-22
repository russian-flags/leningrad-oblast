import { createFlagImage } from "../image.js";
const src = new URL("../flags/kudrovo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0443\u0434\u0440\u043E\u0432\u043E", options);
}
var kudrovo_default = createImage;
export {
  createImage,
  kudrovo_default as default,
  src
};
