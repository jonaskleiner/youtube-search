function showResults(nuggets){
  var html = "";
  var newTitle;
  $.each(nuggets, function(index,carrot){
    var vidTitle = carrot.snippet.title;
    var newTitle = vidTitle.substring(0,25);
    newTitle += '...';
    html += '<li class="flex-item">' + /* carrot.snippet.title */ newTitle  + '<br /><img src="' + carrot.snippet.thumbnails.medium.url + '" width="320" height="180"></li>';
    console.log(carrot.snippet.title);
    // console.log(newTitle);
  });
  $('#results-list').html(html);
}

/*
function titleTrim() {
  var vidTitle = carrot.snippet.title;
  var newTitle = vidTitle.substring(0,30);
}
*/

function getRequest(searchTerm) {
  // get search results --> get data from YT
  $.getJSON("https://www.googleapis.com/youtube/v3/search", {
    part: "snippet",
    key: "AIzaSyAwajfJSd0eNSi91UTVcLCLDAiewr_hdGU",
    q: searchTerm,
    maxResults: 25
  })
  .done(function(box){ // receives all the data back from the YT api
    console.log(box);
    showResults(box.items); // parses out what we don't want and shows only the 'items' in the Obj
  });
}

$(function(){ 
   // shorthand document.ready jQuery function
  $('#search-term').submit(function(event){
   // when form with id 'search-term' is submitted, do this function
    event.preventDefault();
   // prevents page from being reloaded upon form submit
    var searchTerm = $('#query').val();
   // create var named searchTerm
   // set value of var searchTerm to be the value of the search input with the id 'query'
    getRequest(searchTerm);
   // run function 'getRequest' using the value of var searchTerm as the ingredient
  });
});