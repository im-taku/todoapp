$("#addtodo").click(function(){
    const inputtodo = $("input").val();
    $("#todolist").append("<li><input type ='checkbox'>" + inputtodo +"</li>");

    $("input").val("");



});

$(document).on("chenge","input[type=checkboc]",function(){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration","line-through");
    }else{
        $(this).parent().css("text-decoration","none");
    }

});