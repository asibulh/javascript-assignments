function even(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
let numbers = [2, 7, 4, 9, 10];
let evenNumbers = even(numbers);
console.log("Original array:", numbers);
console.log("Even numbers:", evenNumbers);