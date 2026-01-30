//check if the array is empty
//find max and min values in the array
//filter array to remove max and min values
//sum the remaining values in the array
function sumWithoutHighestAndLowest(arr) {
    if (arr == null) return 0;
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    let filteredArr = arr.filter(x => x !== maxValue && x !== minValue);
    let newArr = filteredArr.reduce((acc, current) => acc + current, 0);
    console.log(newArr);


}
sumWithoutHighestAndLowest([6, 2, 1, 8, 10, 13, 4, 5]);