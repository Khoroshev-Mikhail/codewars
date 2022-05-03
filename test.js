const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('https://github.com/Mikha38/')
  .then(response => response.json)
  .then(response => console.log(response))