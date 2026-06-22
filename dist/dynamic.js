import { flagLoaders } from "./flagLoaders.js";
import { resolveSettlementSlug } from "./meta.js";
function getFlagModuleLoader(input) {
  const slug = resolveSettlementSlug(input);
  return slug ? flagLoaders[slug] : void 0;
}
async function loadFlagModule(input) {
  const loader = getFlagModuleLoader(input);
  if (!loader) {
    throw new Error(`Unknown Leningrad Oblast settlement: ${String(input)}`);
  }
  return loader();
}
async function loadFlagImage(input, options) {
  const module = await loadFlagModule(input);
  return module.createImage(options);
}
function preloadFlag(input) {
  void getFlagModuleLoader(input)?.();
}
const loadFlag = loadFlagImage;
export {
  getFlagModuleLoader,
  loadFlag,
  loadFlagImage,
  loadFlagModule,
  preloadFlag
};
