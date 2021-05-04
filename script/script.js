$(function(){

    $("button").click(function(){
        var no1 = parseInt($("#insData").val());

        no1 %= 5;

        $("#outData").text("no1의 최종 입력된 값 : " + no1);   // 8번줄

    });

});
