const lineBreak = () => {
  console.log("-----------------------");
};
const arr = [23, 21, 161, 42, 151, 612, 15, 62, 52];

arr.forEach((value, index) => console.log(`${index} - ${value}`));

lineBreak();

const arr_1 = arr.map((value) => value / 10);

arr_1.forEach((value) => console.log(value));

lineBreak();

const arr_2 = arr.filter((value) => value % 2 !== 0);

arr_2.forEach((value) => console.log(value));

lineBreak();

const total = arr.reduce((previous, current) => {
  previous += current;
  return previous;
}, 0);

console.log(`total is ${total}`);
lineBreak();

const is_contain_at_least_one_odd_element = arr.some(
  (value) => value % 2 !== 0,
);

console.log(
  `Is any element in the arr is odd? ${is_contain_at_least_one_odd_element}`,
);

lineBreak();

const is_all_are_odd = arr.every((value) => value % 2 !== 0);
console.log(`Are all elements in the arr is odd? ${is_all_are_odd}`);

const first_even_number = arr.find((value) => value % 2 == 0);
console.log(`First even element in arr: ${first_even_number}`);
lineBreak();

const last_even_number = arr.findLast((value) => value % 2 == 0);
console.log(`last even element in arr: ${last_even_number}`);
lineBreak();

const first_even_number_index = arr.findIndex((value) => value % 2 == 0);
console.log(`First even element index in arr: ${first_even_number_index}`);
lineBreak();

const last_even_number_index = arr.findLastIndex((value) => value % 2 == 0);
console.log(`last even element index in arr: ${last_even_number_index}`);
lineBreak();

const obj = {
  name: "Houssein",
  age: 29,
};

console.log(obj);

lineBreak();

const { name } = obj;
lineBreak();
console.log(`Name is ${name}`);
const { age } = obj;
lineBreak();
console.log(`Age is ${age}`);
lineBreak();

const printDetails = ({ name, age }) => {
  console.log("From print details function:");
  console.log(name);
  console.log(age);
};
printDetails(obj);

lineBreak();

let number_1 = 15;
let number_2 = 35;

console.log(`--Before--`);
console.log(`Number 1: ${number_1}`);
console.log(`Number 2: ${number_2}`);
console.log(`--After--`);
[number_1, number_2] = [number_2, number_1];
console.log(`Number 1: ${number_1}`);
console.log(`Number 2: ${number_2}`);