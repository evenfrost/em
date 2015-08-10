em
===

An element map. Forms a [Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) from HTML elements with `[data-element]` attribute. Useful for division of presentation and scripts logic.

### Example
```html
<div data-element="wrap">
  <div data-element="wrap-chunk"></div>
  <div data-element="wrap-chunk"></div>
  <div data-element="wrap-chunk"></div>
</div>
```
```javascript
import em from './lib/em';

let elements = em(); // or `em('wrap')` to change default scope from root (document) to [data-element="wrap"]

elements.get('wrap');

for (let element of elements.get('wrapChunk')) {
  // ...
}
```
