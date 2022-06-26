$(document).ready(()=>{
    $(".txt").blur(()=>{
        if($(".txt").val().toString() == ""){
            $(".alert").html("内容不能为空");
        }else{
            $(".alert").html("");
        }
    });
});

// 20220604 js第六次作业 软件191 胡瑞平 19031198