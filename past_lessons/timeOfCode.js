console.log('----------------------------Task:503 "Время выполнения кода"----------------------------')
const { PerformanceObserver, performance } = require('perf_hooks');
var time = performance.now();
let x = 0
for(let i = 0; i < 99999999; i++){
  if(i === 1){
    x = 1
  }
}
time = performance.now() - time;
console.log('Время выполнения = ', time);