import { createFlagImage } from "../image.js";
const src = new URL("../flags/vyborg.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u044B\u0431\u043E\u0440\u0433", options);
}
var vyborg_default = createImage;
export {
  createImage,
  vyborg_default as default,
  src
};
