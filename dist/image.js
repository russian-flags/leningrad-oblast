function applyAttribute(image, name, value) {
  if (value === void 0 || value === null || value === false) {
    image.removeAttribute(name);
    return;
  }
  image.setAttribute(name, value === true ? "" : String(value));
}
function createFlagImage(src, defaultAlt, options = {}) {
  const {
    alt = defaultAlt,
    decoding = "async",
    loading = "lazy",
    className,
    title,
    id,
    width,
    height,
    style,
    dataset,
    attributes
  } = options;
  const image = new Image();
  image.src = src;
  image.alt = alt;
  image.decoding = decoding;
  image.loading = loading;
  if (className !== void 0) image.className = className;
  if (title !== void 0) image.title = title;
  if (id !== void 0) image.id = id;
  if (width !== void 0) image.width = width;
  if (height !== void 0) image.height = height;
  if (style) {
    for (const [name, value] of Object.entries(style)) {
      if (value !== void 0 && value !== null) {
        image.style.setProperty(name.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), String(value));
      }
    }
  }
  if (dataset) {
    for (const [name, value] of Object.entries(dataset)) {
      if (value === void 0 || value === null || value === false) {
        delete image.dataset[name];
      } else {
        image.dataset[name] = value === true ? "" : String(value);
      }
    }
  }
  if (attributes) {
    for (const [name, value] of Object.entries(attributes)) {
      applyAttribute(image, name, value);
    }
  }
  return image;
}
export {
  createFlagImage
};
