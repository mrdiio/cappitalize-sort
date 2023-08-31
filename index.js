// import { makeAllCaps, sortWords } from './function.js';

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
