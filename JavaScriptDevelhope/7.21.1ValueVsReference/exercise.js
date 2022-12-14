 let user = {
   name : "Cosimo",
   age : 30
 }

 let newUser = {};

 for(const value in user){
   //newUser[value];//name
   newUser[value] = user[value]
   console.log(user[value])//qui li stampa senza parentesi perchè è dentro
 }

 newUser["name"] = "Giuseppe";
 newUser.age = 25;
 console.log(user);
 console.log(newUser);






