import { createFlagImage } from "../image.js";
const src = new URL("../flags/vyritsa.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u044B\u0440\u0438\u0446\u0430", options);
}
var vyritsa_default = createImage;
export {
  createImage,
  vyritsa_default as default,
  src
};
