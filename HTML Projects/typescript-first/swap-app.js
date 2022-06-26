function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}
var array = [1, 2];
swap(array);
console.log(array[0], array[1]);
