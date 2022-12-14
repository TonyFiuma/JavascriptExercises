let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string
hello = Number(hello);
age = Boolean(age);
isGraduated = String(isGraduated);

console.log(hello,age,isGraduated);//con hello javascript prova a trovare un modo per convertirlo in numero e non riuscendoci lo stampa NaN cioè not a number
//age da true perchè tutti i numeri diversi da zero per javascript sono true,e isGraduated diventa string false e non valore booleano.

hello = Boolean(hello);
hello = Number(hello)
console.log(hello)//se la casto poi in boolean mi darà false perchè non è un numero(quindi falsy) e se la casto ancora in numero mi darà 0..giustamente