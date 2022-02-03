console.log('----------------------------Task 300: "name-that-integer"----------------------------')
//learnjavascript
   // => 7
function detect_int(...args) {
    if(typeof args === 'undefined') {
        return 1
    }
    for (let i = 1; /*i < -Math.max()*/; i++){
        if(args.every(fns => fns(i))) {
            return i
        }
    }
    //Либо
    /*let i = 0;
    while(i++){
        if(args.every(fns => fns(i))) {
            return i
        }
    }
    */
}
console.log(detect_int((x) => x % 5 == 0, (x) => x % 3 == 0))
console.log('----------------------------Task 227: "Sorting by bits"----------------------------')