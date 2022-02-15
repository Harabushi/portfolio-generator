const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;
// These two can be replaced with the one above
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio Complete! Check out index.html to see the output!')
});


/*
* notes on the arrow function
*/

// In arrow functions, paranthesis are not required when there is exactly one parameter, for 0 or 2 or above we need them
// likewise, curly braces and the rturn call aren't needed with only one statement inside

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });

//   console.log('================');

//   // And this... but only for functions with a single task inside of it
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };