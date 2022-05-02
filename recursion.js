const False = (t) => (f) => f
const True  = (t) => (f) => t


const n = False(True)
const o = undefined


console.log(True(1)()) //False