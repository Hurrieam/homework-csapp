function swap<T>(arr: T[]): void {
    let temp: T = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

let array: number[] = [1, 2];
swap<number>(array);
console.log(array[0], array[1]);