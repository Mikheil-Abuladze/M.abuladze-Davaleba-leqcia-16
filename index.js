const prices = [200, 300, 100, 400, 500];
console.log([200, 300, 100, 400, 500].reduce((a, b) => a + b, 0));
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([200, 300, 100, 400, 500]));

const book = {
  yearPublished: 1913,
  author: "Proust",
  title: "Swann's way",
};

const title = "Swann's way";
const author = "Proust";
const yearPublished = 1913;

const sentence =
  title + " by" + author + " was published in " + yearPublished + ".";

console.log(sentence);

Object.defineProperty(book, "yearPublished", { value: "1912" });

console.log(book);

const product = [{ productName: "Iphone 16", price: 1200, isAvailable: "Yes" }];

console.log(product);
