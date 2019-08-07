window.onload=function()
{
    var btn1 = $('.btn_1')
    var btn2 = $('.btn_2')
    var btn3 = $('.btn_3')
    var history_select = document.getElementsByClassName("history_select")
    btn1.click(()=>
    {   
        $('.btn_3').addClass("btn-dark")
        $('.btn_2').addClass("btn-dark")
        $('.btn_1').removeClass("btn-dark").addClass("btn-info")
        $('#multiCollapseExample3').collapse("hide")
        $('#multiCollapseExample2').collapse("hide")
        $('#multiCollapseExample1').collapse("show")
        history_select[0].style.height = "1200px";
    })
    btn2.click(()=>
    {
        $('.btn_3').addClass("btn-dark")
        $('.btn_1').addClass("btn-dark")
        $('.btn_2').removeClass("btn-dark").addClass("btn-info")
        $('#multiCollapseExample3').collapse("hide")
        $('#multiCollapseExample1').collapse("hide")
        $('#multiCollapseExample2').collapse("show")
        history_select[0].style.height = "1200px";
    })
    btn3.click(()=>
    {
        $('.btn_1').addClass("btn-dark")
        $('.btn_2').addClass("btn-dark")
        $('.btn_3').removeClass("btn-dark").addClass("btn-info")
        $('#multiCollapseExample2').collapse("hide")
        $('#multiCollapseExample1').collapse("hide")
        $('#multiCollapseExample3').collapse("show")
        history_select[0].style.height = "1500px";
    })
}