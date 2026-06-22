import { createFlagImage } from "../image.js";
const src = new URL("../flags/tolmachevo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0422\u043E\u043B\u043C\u0430\u0447\u0451\u0432\u043E", options);
}
var tolmachevo_default = createImage;
export {
  createImage,
  tolmachevo_default as default,
  src
};
