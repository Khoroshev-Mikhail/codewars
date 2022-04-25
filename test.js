let user = {
    ara : 'opredelennyi users ara',
    sayHi(){
        console.log(this.ara)
    }
}

let f = function(){
    return user.sayHi()
}

console.log(f())