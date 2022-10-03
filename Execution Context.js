//contoh Execution Context

//global context
var sayHello = 'Hello';

function person(){ //execution context
    var first = "Ardhito",
        last = "Saputra";

    function firstName(){ //execution context
        return first;
    }

    function lastName(){ //execution context
        return last;
    }
    
    alert(sayHello + firstName() + ' ' + lastName());
}