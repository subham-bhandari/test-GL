//How would you swap two numbers without using a third variable
let x = 100;
let y = 200;

x += y;
y -= y;
x -= y;

console.log(x +" "+ y);

//Find the number of occurrences of a character in a String

let str = "subham bhandari";
let key = 'h';
console.log(charCounter(str, key));
function charCounter( str, key)
{
    if (str.length === 0)
        return 0;

    let flag = 0;
    if (str[0] === key)
        flag++;

    flag += charCounter(str.substring(1), key);

    return flag;
}
 
// How do you reverse an array

let arr = [1,2,3,4,5];
let revarray = [];
let flag =0;
for(let i = arr.length-1; i>=0 ;i--){
    revarray[flag] = arr[i];
    flag++;
}
console.log(revarray);


// How to sort an array
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let pivot = array[0];
        let left = [];
        let right = [];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return quicksort(left).concat(pivot, quicksort(right));
    }
}
let array = [5, 4 , 2, 3, 1];
let sortedArray = quicksort(array);
console.log(sortedArray);

//How do you determine if a string is a palindrome?
let palinStr = "nitin"
function reverseString(palinStr) {
    if (palinStr === "") 
      return "";
    
    else
      return reverseString(palinStr.substring(1)) +palinStr.charAt(0);
}
console.log(palinStr ===  reverseString(palinStr))

//Print a Fibonacci series using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

    let n = 10 // Fibonacci series till 10 terms
    for(let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }


// Two sum num
function sumnum(arraysum, target){
    let pop = arraysum.pop();

    for(let i=0; i<arraysum.length; i++){
        if(pop+arraysum[i] == target)
        return [i, arraysum.length];

    }
    
    return sumnum(arraysum, target);
}
let arraysum = [2,7,11,15];
let target = 9;
console.log(sumnum(arraysum, target));

//Move Zeroes to right - Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0] 
 
let Arr = [0,1,0,3,12];
let Pivot = 0;
for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] != 0) {
        swapWithZeros(Arr, Pivot, i);
        Pivot++;
    }
}
 
function swapWithZeros(Arr, Pivot, index) {
    let flag2 = Arr[Pivot];
    Arr[Pivot] = Arr[index];
    Arr[index] = flag2;
}
console.log(Arr);