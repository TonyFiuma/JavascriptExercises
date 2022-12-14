/*function sayHelloName(call){
    setTimeout(function(){console.log("Hello ");
    call();},200);}

    function printname(){
        console.log("Antonio")
    }

    sayHelloName(printname);*/

    function printName(){
        console.log("Antonio");
    };

    function sayHelloName(richiamo){
        console.log("Hello ");
        richiamo();
    }

    sayHelloName(printName);

    //con la funzione sayHelloName nell' ultima riga vado a richiamare una funzione
    //perchè nel costrutto della funzione dopo console.log ho inserito una funzione
    //come parametro che entrò ad inserire, in questo caso printName che verrà eseguita dopo.