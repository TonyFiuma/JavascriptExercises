function Smartphone(brand,name,price){
    this.brand=brand;
    this.name=name;
    this.price=price;
}

let nokia = new Smartphone("Nokia","3310",1200);
let samsung = new Smartphone("Samsung","galaxy",1200);



console.log(nokia,samsung);

//console.log(Object.is(nokia.price,samsung.price));//il risultato darà un booleano === in questo caso false

