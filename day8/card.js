$(document).ready(function() {
	function hideActiveTab() {
		$(".tab").removeClass("tab-active");
		$(".tab-content").removeClass("tab-content-active");
	}

	function showTab(id) {
		console.log("my id is: " + id);

		$(id).addClass("tab-content-active");
		$("a[href='" + id + "']").parent(".tab").addClass("tab-active");
		// $(".tab[data-tab='" + id + "']").addClass("tab-active");

	}


	$(".tab").click(function() {
		// var id = $(this).data("tab");
		console.log("Step 1");
		var id = $(this).children("a").attr("href");
		$(this).toggleClass("tab tab-1");

		hideActiveTab();
		showTab(id);
	});
});