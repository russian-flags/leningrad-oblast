import { createFlagImage } from "../image.js";
const src = new URL("../flags/bolshaya-izhora.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0418\u0436\u043E\u0440\u0430", options);
}
var bolshaya_izhora_default = createImage;
export {
  createImage,
  bolshaya_izhora_default as default,
  src
};
