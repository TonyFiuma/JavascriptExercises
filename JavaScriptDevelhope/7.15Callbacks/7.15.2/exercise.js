function printName(){
    console.log("Antonio");
}

/*function sayHelloName(callback){
    setTimeout(function(){console.log("Hello");
callback();}
    , 1000);
};

sayHelloName(printName);*/

function printName2(callback){
setTimeout( ()=>
{  console.log("Hello ");
    callback();}, 1000)}

printName2(printName);