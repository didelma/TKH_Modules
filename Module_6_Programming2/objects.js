//Objects assignment: 
//Create min 3 Objects 
//Add 3 attributes: 
    //Getter function
    //Setter function 
    //Action function

let car = {
  maker: "Toyota",
  color: "Mint",
  Mileage: "30",
  //Getter Function here:
  year: "2018",
    get year() {
      return this.year;
    },
  //Setter Funciont here:
  interior: "",
  set intr(intr) {
    this.interior = intr;
  },
  //Action Function here:
  };
car.year;
car.intr = "lime";
console.log(car);


let Mets = {
founded: "1962",
worldSeries: "2",
location: "queens",
lastGame: "lost",
//Getter Function here:
stadium: "City-Field",
  get stadium() {
    return this.stadium;
  },
//Setter Funciont here:
manager: "",
  set mang(mang) {
    this.manager = mang;
  },
//Action Function here:
};
Mets.stadium;
Mets.mang = "Luis-Rojas"; 
console.log(Mets);

let cat = {
status: "upset",
age: "2",
fur: "fluffy",
paws: "4",
//Getter Function here:
nick_name: "fluff-San",
  get nick_name() {
    return this.nick_name;
  },
//Setter Funciont here:
favFood: "",
  set food(food) {
    this.favFood = food;
  },
//Action Function here:

};
cat.nick_name;
cat.food = "beef";
console.log(cat);