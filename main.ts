// Classes: Classes in TypeScript provide a blueprint for creating objects with properties and methods. They encapsulate data and behavior into a single unit.

// Extends (Inheritance): Inheritance in TypeScript allows a class (subclass) to inherit properties and methods from another class (superclass). The subclass can then extend or override the functionality of the superclass.

// Implements (Implementation): Implementing interfaces in TypeScript allows a class to adhere to a contract specified by an interface. It ensures that the class has all the properties and methods defined in the interface.

import chalk from "chalk";

console.log(
  chalk.black.bgMagentaBright(
    "\n\t<<<<< DEFINE CLASSES EXTENDS,INHERITANCE AND IMPLEMENTS >>>>>"
  )
);
class FoodItem {
  name: string;
  flavour: string;
  size: string;
  price: number;

  constructor(name: string, flavour: string, size: string, price: number) {
    this.name = name;
    this.flavour = flavour;
    this.size = size;
    this.price = price;
  }
  getorderDetails(): any {
    return chalk.black.bgGray(
      `\n\t\tMy Ordered is ${chalk.black.bgGreen(
        this.name
      )},\n\t\tSize is ${chalk.black.bgGreen(
        this.size
      )},\n\t\tFlavour ${chalk.black.bgGreen(
        this.flavour
      )},\n\t\tPrice is ${chalk.black.bgGreen(this.price)}. `
    );
  }
}
class Pizza extends FoodItem {
  extracheese: boolean;
  takeaway: boolean;
  quantity: number;
  constructor(
    name: string,
    flavour: string,
    size: string,
    price: number,
    extracheese: boolean,
    takeaway: boolean,
    quantity: number
  ) {
    super(name, flavour, size, price);
    this.extracheese = extracheese;
    this.takeaway = takeaway;
    this.quantity = quantity;

    // Bind `this` to the method
    // this.getorderDetails = this.getorderDetails.bind(this);
  }

  getorderDetails(): any {
    return chalk.black.bgCyanBright(
      `${super.getorderDetails()},\n\t\tExtracheese Available ${chalk.black.bgRedBright(
        this.extracheese
      )},\n\t\tTakeaway ${chalk.black.bgRedBright(
        this.takeaway
      )},\n\t\tOrdered Quantity is ${chalk.black.bgRedBright(this.quantity)} `
    );
  }
}
class Burger extends Pizza {}

const parathaRoll = new FoodItem("ParathaRoll", "Malai boti", "Small", 330);
const pizzas = new Pizza("Pizza", "fajita", "Large", 1500, true, false, 2);
const burger = new Burger("Burger", "zinger", "Large", 750, true, false, 1);

console.log(
  chalk.yellowBright.underline("\n\t>>>> class Fooditem Function call ==>\n\t")
);
console.log(parathaRoll.getorderDetails());
console.log("\n\t");
console.table(parathaRoll);

console.log(
  chalk.yellowBright.underline(
    "\n\t>>> class Pizza extends FoodItem function call ==>\n\t"
  )
);
console.log(pizzas.getorderDetails());
console.log("\n\t");
console.table(pizzas);

console.log(
  chalk.yellowBright.underline(
    "\n\t>>> class Burger extends Pizza function call ==> \n\t"
  )
);
console.log(burger.getorderDetails());
console.log("\n\t");
console.table(burger);

// THE END:
