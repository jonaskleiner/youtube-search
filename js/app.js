$(function(){
	console.log();
});

// show video search results with thumbnail images
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
// show title and thumbnail --> display the data in the UI