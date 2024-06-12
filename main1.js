import chalk from "chalk";
class Dress {
    name;
    color;
    size;
    price;
    constructor(n, color, size, price) {
        this.name = n;
        this.color = color;
        this.size = size;
        this.price = price;
    }
    getorderDetails() {
        return chalk.black.bgCyanBright(`\n\t\t My order is ${chalk.black.bgGreen(this.name)}\n\t\t Color is ${chalk.black.bgGreen(this.color)}\n\t\t Size hai ${chalk.black.bgGreen(this.size)}\n\t\t Price is ${chalk.black.bgGreen(this.price)}`);
    }
}
// class Jeans extends Dress
class Jeans extends Dress {
    available;
    deliveryCharges;
    constructor(n, color, size, price, available, deliveryCharges) {
        super(n, color, size, price);
        this.available = available;
        this.deliveryCharges = deliveryCharges;
    }
    getorderDetails() {
        return chalk.black.bgCyanBright(`\n\t\t${super.getorderDetails()},\n\t\t Available jeans ${chalk.black.bgRedBright(this.available)}\n\t\t Delivery charges is ${chalk.black.bgRedBright(this.deliveryCharges)}`);
    }
}
const kurti = new Dress("kurti", "Black", "Medium", 1500);
console.log(chalk.black.bgMagentaBright("\n\t Dress Function call ==> \n"), kurti.getorderDetails());
console.table(kurti);
const jeans = new Jeans("JEANS", "BLUE", "SMALL", 2000, true, 500);
console.log(chalk.black.bgMagentaBright("\tJeans Function call + Extend value"), jeans.getorderDetails());
console.table(jeans);
// END:
