var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function expand_X(array) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].push(0);
        for (var j = 0; j < arr[i].length - 1; j++) {
            arr[i][arr[i].length - 1] += arr[i][j];
        }
    }
    console.log(array);
}
function expand_Y(array) {
    array.push([]);
    for (var i = 0; i < array[0].length; i++) {
        array[array.length - 1].push(0);
    }
    for (var i = 0; i < array[0].length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            array[array.length - 1][i] += array[j][i];
        }
    }
    console.log(array);
}
expand_X(arr);
expand_Y(arr);
// js第三次作业 软件191 胡瑞平 19031198
