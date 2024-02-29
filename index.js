// Here we are prompting the user to input some data i.e. froyo flavors.
const userInputString = prompt(
  "Please enter a list of comma-seperated froyo flavors!"
);
console.log(userInputString);
// Here I am taking the user's input and converting it from 1 string to several strings, splitting it at each ,
let flavors = userInputString.split(",");

console.log(flavors);

function countFreq(flavors) {
  // Here I am creating an empty object that I will store user input.
  const froyoObject = {};
  // Here I am creating a loop that will iterate for as many times as the user input calls for.
  for (let i = 0; i < flavors.length; i++) {
    // Here, I am creating a new property in the empty array each time unique user input is entered for the first time.
    if (froyoObject[flavors[i]] === undefined) {
      froyoObject[flavors[i]] = 1;
      // Here I am creating a rule that increments duplicates of that unique user input that I mentioned above.
    } else {
      froyoObject[flavors[i]] += 1;
    }
  }
  // Here I am displaying the results of the function.
  console.log(froyoObject);
}
// Here I am invoking the function I've created.
countFreq(flavors);
