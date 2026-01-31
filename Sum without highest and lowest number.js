//check if the array is empty
//find max and min values in the array
//filter array to remove max and min values
//sum the remaining values in the array
function sumWithoutHighestAndLowest(arr) {
    if (arr == null || arr.length < 3) return 0;
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    let filteredArr = arr.filter(x => x !== maxValue && x !== minValue);
    let sum = filteredArr.reduce((acc, current) => acc + current, 0);
    console.log(sum);


}
sumWithoutHighestAndLowest([ -6, 20, -1, 10, -12 ]);