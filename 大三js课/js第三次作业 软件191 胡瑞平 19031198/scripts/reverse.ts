const str: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("str")[0];

const result: HTMLElement = <HTMLElement>document.getElementsByClassName("result")[0];

str.addEventListener("input", function () {
    const str_to_string: string = str.value.toString();

    function reverse(str: string): string {
        let str_reverse: string = "";
        for (let i = 0; i < str.length; i++) {
            str_reverse += str[str.length - i - 1];
        }
        return str_reverse;
    }

    const str_to_string_reverse: string = reverse(str_to_string);

    if (str_to_string == str_to_string_reverse) {
        result.innerHTML = "是回文串";
    } else {
        result.innerHTML = "不是回文串";
    }
});

// js第三次作业 软件191 胡瑞平 19031198