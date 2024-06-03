function intToRoman(num) {
    // Define the Roman numeral symbols and their values
    const symbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';  // This will store the final Roman numeral

    for (let [symbol, value] of symbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example usage:
console.log(intToRoman(14));  
console.log(intToRoman(798)); 
console.log(intToRoman(0));   
console.log(intToRoman(100000)); // Output: MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

	
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));


// do not edit below this line
module.exports = convertToRoman
