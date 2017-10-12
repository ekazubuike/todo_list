//check off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click X to delete item
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    //grab todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add it to ul
    $("ul").append("<li>" + "<span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});

$(".fa-pencil-square-o").click(function(){
  $("input[type='text']").fadeToggle(500);
});