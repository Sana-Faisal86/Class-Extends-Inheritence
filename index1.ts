import chalk from "chalk";

class Books {
  name: string;

  books: Property[] = [];
  addBooks(booksObj: Property) {
    this.books.push(booksObj);
  }
  constructor(name: string) {
    this.name = name;
  }
}
class Property {
  title: string;
  pages: number;
  price: number;
  delivery: boolean;
  author: string;

  constructor(
    title: string,
    pages: number,
    price: number,
    delivery: boolean,
    author: string
  ) {
    this.title = title;
    this.pages = pages;
    this.price = price;
    this.delivery = delivery;
    this.author = author;
  }
}

let book1 = new Books("StoryBook");
let book2 = new Books("HistoryBook");
let book3 = new Books("PoemBook");
//
let story = new Property("Harry Potter", 434, 1055, true, "JK Rowling"); //Pass value for Argument:
let history = new Property("World History", 894, 1699, true, "Krishna Reddy");
let poem = new Property("Sweet Dreams", 367, 550, true, " Rick Telander");

// function call and object push in Array:
book1.addBooks(story);
book2.addBooks(history);
book3.addBooks(poem);

// output bookname and Array Object:
console.log(chalk.black.bgMagentaBright("\n\t ===>", book1.name, "<==="));
console.log(book1.books);

console.log(chalk.black.bgMagentaBright("\n\t ===>", book2.name, "<==="));
console.log(book2.books);

console.log(chalk.black.bgMagentaBright("\n\t ===>", book3.name, "<==="));
console.log(book3.books);

// END :
