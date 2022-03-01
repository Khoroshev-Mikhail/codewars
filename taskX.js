console.log('----------------------------Task:515 "Sum of a sequence"----------------------------')
const sequenceSum = (begin, end, step) => {
  if(begin > end){
    return 0
  }
  return begin += sequenceSum(begin + step, end, step)
};
console.log(sequenceSum(1, 5, 1))
