const asyncFns = [
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(0), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(1), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(2), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(3), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(4), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(5), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(6), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(7), Math.random() * 1000)),
]
function allWithLimit(fns, limit){
    let arr = [...fns];
    let count = fns.length;
    let result = []
    return new Promise((resolve, reject) => {
        function helper(){
            if(arr.length === 0){
                return; //Зачем это условие???
            }
            let i = fns.length - arr.length
            arr.shift()().then(x => {
                result[i] = x
                count--
                if(count > 0){
                    helper()
                }
                if(count === 0){
                    resolve(result)
                }
            })
        }
        for(let i = 0; i < limit; i++){
            helper()
        }
    })
}

allWithLimit(asyncFns, 3).then(console.log);