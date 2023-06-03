// Adding Dependencies
const router = require('express').Router();
const fetch= require('node-fetch');

// Registering public folder to express 
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

// Fetching the API using try and catch()
router.get('/', async (req, res) => {
    let limitedResults=[];
        async function getMovieResults(searchTerm){
        const URL=`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=6d03d3e5`;
        const response= await fetch(URL)
        .then(response =>{return response.json()})
        .then(data => {  
            for(i=0; i<10; i++){
            limitedResults.push(data.Search[i])};
            console.log(limitedResults);
            res.render('homepage', {
                limitedResults,
                // logged_in: req.session.logged_in
            });
        })
    };
    try{
    getMovieResults('scream');

} catch (err) {
    res.status(500).json(err);
}
});

router.get('/synapsis/:movie', async (req, res) => {
    try {
        async function getMovieResults(title){
            // const URL=`https://www.omdbapi.com/?s=${title}&page=1&apikey=6d03d3e5`;
            // added new link to get the full plot of the movie
            const URL="http://www.omdbapi.com/?t=The+Avengers&y=2012&plot=full&apikey=6d03d3e5";
            const response= await fetch(`${URL}`);
            const data= await response.json();
            console.log(data)
            res.render('synapsis', {
                // the data will be sent into the synapsis.handlebars
        ...data,
        // logged_in: req.session.logged_in
      });
    };
          // console.log(data)
        getMovieResults(req.params.movie);
   
    }
    catch (err) {
      res.status(500).json(err);
    }
  });

  // Display movie results from the API based on search Bar text input

//   searchBtn.on('click', function (event){
//     event.preventDefault();
//     searchHistArr.push(textVal.value);
//     console.log(textVal.value)
//     localStorage.setItem('movies', JSON.stringify(searchHistArr));
// });
module.exports = router;


