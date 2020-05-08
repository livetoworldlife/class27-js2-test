// Name: Ersin
// Class: 27

// JavaScript1

/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string

    Expected output:
    'Noer is 28 and works as an Education Director'
*/

function logObj(obj) {
  let concatString, name, age, job = '';
  for (let [key, value] of Object.entries(obj)) {
    if (key === 'name') {
      name = value;
    } else if (key === 'age') {
      age = value;
    } else {
      job = value;
    }
  }
  concatString = `${name} is ${age} and works as an ${job}!`;
  console.log(concatString);
  return concatString;
}
const newObj = {
  name: "Noer",
  age: 28,
  job: "Education Director"
};
logObj(newObj);

/* 2. Create a function, named logNumbers, that:
      - Takes 2 arguments: a start number and an end number
      - Has a loop that starts from the start number and ends until the end number
      - Log to the console each number, however...
      - If the number is a multiple of 3 output the string “Fizz”,
      - If the number is a multiple of 5 output the string “Buzz”
      - If the number is a multiple of 3 AND 5 output the string “FizzBuzz”
      - Make use of the modulo operator and check for the remainder: %

      Expected output:
      logNumbers(1, 15);
      1
      2
      Fizz
      4
      Buzz
      6
      ...
      13
      14
      FizzBuzz

      Use the following values: 1 (start number) and 100 (end number)
*/

function logNumbers(startNumber, endNumber) {
  let numberString;
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numberString = 'FizzBuzz';
    } else if (i % 3 === 0) {
      numberString = 'Fizz';
    } else if (i % 5 === 0) {
      numberString = 'Buzz';
    } else {
      numberString = i;
    }
    console.log(numberString);
  }
}
logNumbers(1, 100);


// JavaScript2

/* 3. Create a function, named toNumbers, that:
      - Takes in 1 argument: an array of strings
      - Get the index position number of each value
      - Create a new array that includes all these numbers
      - Make use of the map() function
      - Log to the console the array of numbers
      - Return the array of numbers

      Expected output:
      [1, 2, 3, 4]

      Use the following array: const letters = ['a', 'b', 'c', 'd'];
*/
function toNumbers(arr) {
  let indexArr = arr.map((value, index) => {
    return ++index;
  });
  console.log(indexArr);
  return indexArr;
}
const letters = ['a', 'b', 'c', 'd'];

toNumbers(letters);

/* 4. Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Injects each object's content into the DOM in an unordered list
      - Make use of the forEach() function
      - Returns true if it works, false if it doesn't

      Target the '#root' element in 'index.html'.
      Use the following object:
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
                        "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
            }
      ];
*/
function injectBooksToDOM(booksArr) {
  const root = document.getElementById('root');
  let ul = document.createElement('ul');
  root.appendChild(ul);
  booksArr.forEach((element, index, arr) => {
    console.log(arr)
    let li = document.createElement('li');
    let p = document.createElement("p");
    p.innerHTML = `book name ; ${arr[index].bookName} and author ; ${arr[index].author}
    <img src="${arr[index].coverURL}">`;
    ul.appendChild(li);
    li.appendChild(p);
  });

}
const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
  }
];
window.onload = injectBooksToDOM(books);
/*
5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in?
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us,
the explanation why is the important part)

function test() {
  console.log('one');
  setTimeout(function () {
    console.log('two');
    setTimeout(function () {
      console.log('three');
    }, 0);
  }, 1000);
  setTimeout(function () {
    console.log('four');
    setTimeout(function () {
      console.log('five');
    }, 1000);
  }, 0);
  console.log('six');
}
test(); // ?
*/

/*
we defined test function.
first 'one' is come the call stack then is log in console.
then there are two callback functions-setTimeout they will throw the callback API then call queue then event loop. after call stack is empty, their turns will start
second 'six' is come the call stack then is log in console.
third 'four' because setTimeout function has '0' for timeout. there is a new call back function into that. it will come later callback API
fourth 'two' because setTimeout function has '1000' for timeout. there is a new call back function into that. it will come later callback API
fifth 'three' because inner setTimeout function has '0' for timeout.
sixth 'five' is log in console.because inner setTimeout function has '1000' for timeout
*/
