//change the numbers to string
//split the string into array elements
//change the string elements into numbers 
//reverse the array
function digitize(n) {
    return n
    .toString()
    .split('')
    .map(Number)
    .reverse();
}
console.log(digitize(123456));
 