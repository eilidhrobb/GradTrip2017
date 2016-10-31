$(document).ready(function(){
	
	$("#addbutton").on("click", function(){
		var value = $("#input").val();
		if(value !== ""){
			$("#list").append("<li>" + value + "</li>");
			$("#input").val("");
		}
	});
});






