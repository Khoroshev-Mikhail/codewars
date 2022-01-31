console.log('----------------------------Task 227: " Evaluating prefix Polish notation"----------------------------')
// 2 for обратный
function calculate(expression) {
  return expression.split(' ')
}
console.log(calculate('/ + 3 5 * 2 2'))
// / + 3 5 * 2 2       7
// / + 3 5 4           5
// / 8 4               3
// 2                   1