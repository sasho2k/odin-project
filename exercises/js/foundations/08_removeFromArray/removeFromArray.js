const removeFromArray = function(array, ...values) {
  return array.filter(item => !values.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
