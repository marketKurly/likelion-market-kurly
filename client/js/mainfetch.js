import { tiger, xhrPromise } from '../lib/index.js';

tiger.get('http://localhost:3000/products');
xhrPromise
  .get('http://localhost:3000/products')
  .then((res) => {
    console.log(res);
  });
