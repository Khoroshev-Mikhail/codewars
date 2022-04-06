let animal = {
    eats : true,
    ara : 'ara',
    walk : function(){
        return this.baba
    }
}
let rabbit = {
    jumps : 'o4en mnogo',
    baba : 'baba',
    __proto__ : animal
}
for(let prop in rabbit){
    if(rabbit.hasOwnProperty(prop)){
        console.log(prop)
    }
}
