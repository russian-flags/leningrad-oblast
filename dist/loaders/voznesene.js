import { createFlagImage } from "../image.js";
const src = new URL("../flags/voznesene.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u044C\u0435", options);
}
var voznesene_default = createImage;
export {
  createImage,
  voznesene_default as default,
  src
};
