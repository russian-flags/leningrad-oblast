import { createFlagImage } from "../image.js";
const src = new URL("../flags/vazhiny.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u0430\u0436\u0438\u043D\u044B", options);
}
var vazhiny_default = createImage;
export {
  createImage,
  vazhiny_default as default,
  src
};
