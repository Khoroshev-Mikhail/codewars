let ara = {
    name : 'araPapa',
    araMethod : function(){
        return this.name
    }
}
function createObjectChild(parent){
    var F = function(){}
    F.prototype = parent;
    return new F()
}
console.log(araChild.two())