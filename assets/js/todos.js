//check off specific todos by clicking
// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// 	}
// 	else{
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// 	}
// });
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//add new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo text from input
		var picktime = $("#close").val();
		$("#close").val("");
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + picktime.italics().fontcolor("#8599ad").small()+ "   " + todoText + "</li>");
	}
})

$("#toggleplus").click(function(){
	$("#calender").fadeToggle();
})

jQuery("#close").datetimepicker();
