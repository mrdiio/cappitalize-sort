export const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    if (typeof array === 'object') {
      const capsArray = array.map((word) => {
        if (typeof word !== 'string') {
          reject('Error: Not all items in the array are strings!');
        } else {
          return word.toUpperCase();
        }
      });
      resolve(capsArray);
    } else {
      reject('Error: The argument is not an array');
    }
  });
};

export const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    if (typeof array === 'object') {
      resolve(array.sort());
    } else {
      reject('Error: The argument is not an array');
    }
  });
};
