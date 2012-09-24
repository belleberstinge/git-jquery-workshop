// console.log("main.js is loaded");
// $("img").width(200);
$(document).ready(function(){
	// code here will run when the HTML document is loaded.

	$("img").on("dblclick", function(){
		$("img").width(200);
		$("h1").fadeOut();
		$(".booboo").slideUp();
		$("#rahul").hide();
	});

	// $("img").click(function(){
	// 	$("img").width(200);
	// });
});