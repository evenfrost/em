const ElementMap = class {
  constructor(root = document) {
    root = typeof root === 'string'
      ? document.querySelector('[data-element="' + root + '"]')
      : root instanceof HTMLElement
        ? root
        : document;
    
    let elements = root ? Array.from(root.querySelectorAll('[data-element]')) : [];
    let map = new Map();

    for (let element of elements) {
      map.set(element.dataset.element, element);
    }

    return map;
  }
};

export default root => new ElementMap(root);
