const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    
    n = Number.parseInt(n);

    if (n <= 1) return n;

    let a = 0, b = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = a + b;
        a = b;
        b = temp;
        // temp = 1, a = 1, b = 1
        // temp = 2, a = 1, b = 2
        // temp = 3, a = 2, b = 3
        // temp = 5, a = 3, b = 5
        // temp = 8, a = 5, b = 8
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
