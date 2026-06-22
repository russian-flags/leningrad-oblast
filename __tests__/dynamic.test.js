import assert from "node:assert/strict";
import {
  getFlagModuleLoader,
  loadFlag,
  loadFlagImage,
  loadFlagModule,
  preloadFlag,
} from "../dist/dynamic.js";
import { installTestImage } from "./helpers/test-image.js";

const ImageCtor = installTestImage();

assert.equal(loadFlag, loadFlagImage);

const vyborgLoader = getFlagModuleLoader("vyborg");
assert.equal(typeof vyborgLoader, "function");
assert.equal(getFlagModuleLoader(" VYBORG "), vyborgLoader);
assert.equal(getFlagModuleLoader("Выборг"), vyborgLoader);
assert.equal(getFlagModuleLoader("yanino_1"), getFlagModuleLoader("yanino-1"));
assert.equal(getFlagModuleLoader("unknown"), undefined);

assert.doesNotThrow(() => preloadFlag("vyborg"));
assert.doesNotThrow(() => preloadFlag("unknown"));

const vyborgModule = await loadFlagModule("Выборг");
assert.equal(vyborgModule.default, vyborgModule.createImage);
assert.equal(typeof vyborgModule.createImage, "function");
assert.ok(vyborgModule.src.endsWith("/flags/vyborg.svg"));

const moduleImage = vyborgModule.createImage({ className: "module-image" });
assert.ok(moduleImage instanceof ImageCtor);
assert.equal(moduleImage.className, "module-image");
assert.ok(moduleImage.src.endsWith("/flags/vyborg.svg"));

const loadedImage = await loadFlagImage("VYBORG", {
  alt: "Lazy Vyborg",
  className: "loaded-image",
});
assert.ok(loadedImage instanceof ImageCtor);
assert.equal(loadedImage.alt, "Lazy Vyborg");
assert.equal(loadedImage.className, "loaded-image");
assert.equal(loadedImage.loading, "lazy");
assert.equal(loadedImage.decoding, "async");
assert.ok(loadedImage.src.endsWith("/flags/vyborg.svg"));

const aliasImage = await loadFlag("vyborg", { alt: "Alias Vyborg" });
assert.ok(aliasImage instanceof ImageCtor);
assert.equal(aliasImage.alt, "Alias Vyborg");

await assert.rejects(
  () => loadFlagModule("unknown"),
  /Unknown Leningrad Oblast settlement: unknown/
);
await assert.rejects(
  () => loadFlagImage("unknown"),
  /Unknown Leningrad Oblast settlement: unknown/
);
