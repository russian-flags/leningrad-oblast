import { createFlagImage } from "../image.js";
const src = new URL("../flags/pavlovo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041F\u0430\u0432\u043B\u043E\u0432\u043E", options);
}
var pavlovo_default = createImage;
export {
  createImage,
  pavlovo_default as default,
  src
};
