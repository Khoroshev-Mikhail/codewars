console.log('----------------------------Task:310 "Church Booleans"----------------------------')
const True = T => F => T
const False = T => F => F

const And = A => B => A(B)(False);
// And(True)(True) === True
// And(True)(False) === False  
// And(False)(True) === False
// And(False)(False) === False

const Or = A => B => A(True)(B)
// OR(True)(True) === True
// Or(False)(True) === True
// Or(True)(False) === True
// OR(False)(False) === False 

const Not = A => A(False)(True)
// Not(False) === True
// Not(True) === False

const Xor = A => B => A(B(False)(A))(A(True)(B))
// Xor(True)(True) === False
// Xor(False)(True) === True
// Xor(True)(False) === True
// Xor(False)(False) === False
