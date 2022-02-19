console.log('----------------------------Task:227 "Sorting by bits"----------------------------')
const True = T => F => T;
const False = T => F => F;

const And = A => B => A(B)(False);


And(True)(True) === True
And(True)(False) === False  
And(False)(True) === False
And(False)(False) === False

Not(False) === True
Not(True) === False

OR(True)(True) === True
Or(False)(True) === True
Or(True)(False) === True
OR(False)(False) === False 

const Not = A => null
const And = A => B => null
const Or = A => B => null
const Xor = A => B => null