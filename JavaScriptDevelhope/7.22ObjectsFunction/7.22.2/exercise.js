const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};
Object.freeze(smartphone);//va messo prima di ridichiarare una variabile all' interno dell'oggetto
smartphone.price = 100;

smartphone.price =50;


console.log(smartphone);
