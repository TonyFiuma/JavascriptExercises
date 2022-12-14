let user = {
"name": "Cosimo",
"age": 30,
};

let newUser = user


// console.log(newUser);
// console.log(user);

// function changeValue(user,age,val){
//   let copia= Object.assign({},user);
// copia[age]=val;
// return copia;}

// let newUser = changeValue(user,"name","Antonio");

// console.log(user);
// console.log(newUser);
// console.log(user);

// let newUser = Object.assign({},user);

// newUser.name = "Giuseppe";

// console.log(user);
// console.log(newUser);
// console.log(user);

let newUser1 = Object.assign({},user);
newUser1.name="Gigi";
newUser1.age=25;

console.log(newUser1);
console.log(user);




