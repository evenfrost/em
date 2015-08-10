const ElementMap = class {
  constructor(root = document) {
    root = typeof root === 'string'
      ? document.querySelector('[data-element="' + root + '"]')
      : document;
    
    let elements = root ? Array.from(root.querySelectorAll('[data-element]')) : [];
    let map = new Map();
    let camelize = string => string.replace(/-([a-z])/g, g => g[1].toUpperCase());

    for (let element of elements) {
      map.set(camelize(element.dataset.element), element);
    }

    return map;
  }
};

export default (root) => new ElementMap(root);
