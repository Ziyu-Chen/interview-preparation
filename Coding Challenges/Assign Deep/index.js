/*
Write a function that merges two objects deeply like Object.assign()
*/

const assignDeep = (object1, object2) => {
  for (const key in object2) {
    if (typeof object2[key] === "object") {
      object1[key] = {};
      assignDeep(object1[key], object2[key]);
    } else {
      object1[key] = object2[key];
    }
  }
};

module.exports = { assignDeep };
