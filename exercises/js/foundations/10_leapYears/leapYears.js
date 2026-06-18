const leapYears = function(year) {
    const isYearDivisibleBy4 = year % 4 === 0;
    const isYearDivisibleBy400 = year % 400 === 0;
    const isYearDivisibleBy100 = year % 100 === 0;

    if (isYearDivisibleBy4 && 
        (!isYearDivisibleBy100 || isYearDivisibleBy400)
    ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
