// Defining variables for search bar
let searchBtn=$('.searchBtn');
let searchBar=$('.searchBar');
let movieVal=document.getElementById('movieInput');
let resultsGrid=$('.searchGrid');
let searchHistArr=[];

// Registering public folder to express 
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3001);

// Fetching the API
// async function getMovieResults(searchTerm){
//     const URL=`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=6d03d3e5`;
//     const response= await fetch(`${URL}`);
//     const data= await response.json();
//     console.log(data)
    // if(data.Response == "true") displayResult(data.Search);
// };
// getMovieResults('avengers');
// Searching movies from API based on search Bar text input
// function searchMovies(){
//     let searchTerm=movieVal.value.trim();
//     console.log(searchTerm) 
// }

// handlebar needs to make component that will fill out the necessary requirements of api data into 
// the page
// and in order to make this work i will need to route the handle bar so when search button is clicked 
// 
// Display movie results from the API based on search Bar text input
// function displayResult(movies){

// }

// searchBtn.on('click', function (event){
//     event.preventDefault();
//     searchHistArr.push(textVal.value);
//     console.log(textVal.value)
//     localStorage.setItem('movies', JSON.stringify(searchHistArr));
// });




