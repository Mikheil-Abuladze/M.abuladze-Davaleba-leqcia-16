const prices = [200, 300, 100, 400, 500];
console.log([200, 300, 100, 400, 500].reduce((a, b) => a + b, 0));
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([200, 300, 100, 400, 500]));

const book = {
  yearPublished: 1913,
  author: "Proust",
  title: "Swann's way",
};

console.log(book);
