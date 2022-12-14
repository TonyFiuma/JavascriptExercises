let car1={
    name:"Alfa Mito",
    color:"Red"
};

//console.log(car1.color,car1.name);

for(const alfa in car1){
    console.log(alfa)
}

for(const alfa in car1){
    console.log(typeof(alfa))
}

for(const alfa in car1){
    console.log(typeof (car1[alfa]))
}
