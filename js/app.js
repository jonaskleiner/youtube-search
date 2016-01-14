// function getRequestOrig(searchTerm){
//   var params = {
//     s: searchTerm,
//     r: 'json'
//   };
//   url = 'http://www.omdbapi.com';

//   $.getJSON(url, params, function(data){
//     showResults(data.Search);
//   });
// };
function showResults(nuggets){
  var html = "";
  $.each(nuggets, function(index,carrot){
    // need to update the html to include clickable thumbnails
    html += '<li class="flex-item">' + carrot.snippet.title + '<br /><img src="' + carrot.snippet.thumbnails.medium.url + '"></li>';
    console.log(carrot.snippet.title);
  });
  $('#results-list').html(html);
}

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

