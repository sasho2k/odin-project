const palindromes = function (palindrome) {
    const valid = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanString = palindrome
    .toLowerCase()
    .split('')
    .filter((character) => valid.includes(character))
    .join('');

    const reverseString = cleanString.split('').reverse().join('');

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
