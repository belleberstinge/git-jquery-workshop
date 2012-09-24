// console.log("main.js is loaded");
// $("img").width(200);
$(document).ready(function(){
	// code here will run when the HTML document is loaded.
	$("li").on("click", function(){

		// refers to own object
		if ($(this).hasClass("done") {
			$(this).removeClass("done");
		} else {
			$(this).addClass("done");
		}

		// refers to arrays of all "li"s
		// $("li").addClass("done");
	});

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

// workflow
// git add .
// git commit -m "message"

// other useful git commands:
// git log