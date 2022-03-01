console.log('----------------------------Task:522 "Sum squares of numbers in list that may contain more lists"----------------------------')
function SumSquares(l){
  return l.reduce((a, b) => {
    return Array.isArray(b) ? a + SumSquares(b) : a + b**2
  }, 0)
}
console.log(SumSquares([1, 5, 1, [[2]]]))
