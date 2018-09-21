// Click to check off todos
$("li").on("click", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todos
$("span").on("click", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

// Add a new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><i class=\"fa fa-trash\"></i>" + todoText + "</li>");
	}
})