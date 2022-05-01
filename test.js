const False = (t) => (f) => f
const True  = (t) => (f) => t


const n = False(True)
const o = undefined
const t = False
const a = False
const d = True(False)
const r = False(True)
const x = undefined


console.log(True(1)()) //False