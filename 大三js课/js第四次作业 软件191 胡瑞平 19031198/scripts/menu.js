var select_a = document.getElementsByClassName("select")[0];
var select_b = document.getElementsByClassName("select")[1];
var select_c = document.getElementsByClassName("select")[2];
var select_a_arr = ["1", "2", "3"];
var select_b_arr = [
    ["1.1", "1.2", "1.3"],
    ["2.1", "2.2", "2.3"],
    ["3.1", "3.2", "3.3"]
];
var select_c_arr = [
    [
        ["1.1.1", "1.1.2", "1.1.3"],
        ["1.2.1", "1.2.2", "1.2.3"],
        ["1.3.1", "1.3.2", "1.3.3"]
    ], [
        ["2.1.1", "2.1.2", "2.1.3"],
        ["2.2.1", "2.2.2", "2.2.3"],
        ["2.3.1", "2.3.2", "2.3.3"]
    ], [
        ["3.1.1", "3.1.2", "3.1.3"],
        ["3.2.1", "3.2.2", "3.2.3"],
        ["3.3.1", "3.3.2", "3.3.3"]
    ]
];
for (var i = 0; i < select_a_arr.length; i++) {
    select_a.add(new Option(select_a_arr[i], select_a_arr[i]));
}
for (var i = 0; i < select_a_arr.length; i++) {
    select_b.add(new Option(select_b_arr[0][i], select_b_arr[0][i]));
}
select_a.addEventListener("change", select_a_change);
select_b.addEventListener("change", select_b_change);
function select_a_change() {
    for (var i = 0; i < select_a.length; i++) {
        if (select_a.options[i].selected) {
            select_b.length = 0;
            for (var j = 0; j < select_b_arr.length; j++) {
                select_b.add(new Option(select_b_arr[i][j]));
            }
        }
    }
    select_c.length = 0;
}
function select_b_change() {
    for (var i = 0; i < select_a.length; i++) {
        if (select_a.options[i].selected) {
            for (var j = 0; j < select_b_arr.length; j++) {
                if (select_b.options[j].selected) {
                    select_c.length = 0;
                    for (var k = 0; k < select_c_arr.length; k++) {
                        select_c.add(new Option(select_c_arr[i][j][k]));
                    }
                }
            }
        }
    }
}
// js第四次作业 软件191 胡瑞平 19031198
