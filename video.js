superhero = function(nickname, firstname, lastname){
    init();

    function init(){
        refresh();
    }

    function refresh(){
        console.log(`My name is ${firstname} ${lastname}`)
        console.log(`i'm ${nickname}`)
    }

    return {
        refresh : refresh
    }
}

superhero('Batman', 'Bryce', 'Wayne')
superhero = function(nickname, firstname, lastname){
    init();

    function init(){
        refresh();
    }

    function refresh(){
        console.log(`My name is ${firstname} ${lastname}`)
        console.log(`i'm ${nickname}`)
    }

    return {
        refresh : refresh
    }
}

superhero('Batman', 'Bryce', 'Wayne')

widget = function(root){
    var
        me;
    var     
        innerWidget = otherWidget();

    publicInterface();
    attachEvents();

    function attachEvents(){
        root.click(clickHandler)

        root.click(
            function(){
                privateAction()
                me.publicAction()
                innerWidget.externalAction();
            }
        )
    }
}