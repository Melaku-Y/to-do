$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
       var textTodo = $(this).val();
       $(this).val("");
       $("ul").append("<li>" + textTodo + "<span><i class='fa fa-trash'></i></span>" + "</li>")
    }
})
$(".fa-plus-circle").on("click", function(){
    $("input[type='text'").fadeToggle();
})
$(".fa-filter").on("click", function(event){
    $("body").toggleClass("bodyClass1");
    $("h1").toggleClass("h1class1");
    $("input").toggleClass("inputClass1");
    $("li:nth-child(2n)").css("background", "#f05a5a")
});