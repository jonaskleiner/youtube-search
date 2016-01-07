// show video search results with thumbnail images
function getVideo() {
	// get search results --> get data from YT
	$.getJSON("https://www.googleapis.com/youtube/v3/search", {
		part: "snippet",
		key: "AIzaSyAwajfJSd0eNSi91UTVcLCLDAiewr_hdGU",
		q: "surfing pug dogs"
	})
	.done(function(data){
		console.log(data);
	});
	// for each search result --> loop through results
	// .each();
	// show title and thumbnail --> display the data in the UI
	// .appendTo();
	// hard code the UI to verify how I want the results to show.
}

$(function(){
	console.log();
	getVideo();
});