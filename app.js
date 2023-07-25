$("#addtodo").click(function(){
    const inputtodo = $("input").val();
    $("#todolist").append("<li><input type ='checkbox'>" + inputtodo +"</li>");

    $("input").val("");



});