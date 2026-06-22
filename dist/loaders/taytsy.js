import { createFlagImage } from "../image.js";
const src = new URL("../flags/taytsy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0422\u0430\u0439\u0446\u044B", options);
}
var taytsy_default = createImage;
export {
  createImage,
  taytsy_default as default,
  src
};
