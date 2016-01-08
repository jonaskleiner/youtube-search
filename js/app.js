function getRequestOrig(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
};

// function showResults(results){
//   var html = "";
//   $.each(results, function(index,value){
//     html += '<p>' + value.Title + '</p>';
//     console.log(value.Title);
//   });
//   $('#search-results').html(html);
// }

function getRequest(searchTerm) {
  // get search results --> get data from YT
  $.getJSON("https://www.googleapis.com/youtube/v3/search", {
    part: "snippet",
    key: "AIzaSyAwajfJSd0eNSi91UTVcLCLDAiewr_hdGU",
    q: searchTerm
  })
  .done(function(data){
    console.log(data);
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

