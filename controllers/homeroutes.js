// Adding Dependencies
const router = require('express').Router();
const fetch = require('node-fetch');
const {getMovieResults} = require('../utils/getMovieResults');


// Registering public folder to express
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));

// Fetching the API using try and catch() for GET Route


router.post("/syanpsis", async (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

router.get('/', (req, res) => {
    try {
        getMovieResults('avengers').then(data =>{
            console.log(data);
            res.render('homepage', {
                data,
                // logged_in: req.session.logged_in
            })
        })
    }
    catch (err) {
        res.status(500).json(err);
}
});

// Middleware
app.use(express.urlencoded({ extended: false }));

router.post('/', (req, res) => {
    try {
        getMovieResults(req.body.Title).then(data =>{
            console.log(data);
            res.render('homepage', {
                data,
                // logged_in: req.session.logged_in
            })
        })
    }
    catch (err) {
        res.status(500).json(err);
}
});

router.get('/synapsis/:movie', async (req, res) => {
    try {
        async function getSynapsis(title, year) {
            // const URL=`https://www.omdbapi.com/?s=${title}&page=1&apikey=6d03d3e5`;
            // added new link to get the full plot of the movie
            const URL = `http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=6d03d3e5`;
            const response = await fetch(`${URL}`);
            const data = await response.json();
            console.log(data)
            res.render('synapsis', {
                // the data will be sent into the synapsis.handlebars
                ...data,
                // logged_in: req.session.logged_in
            });
        };
        // console.log(data)
        getSynapsis(req.params.movie);

    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Display movie results from the API based on search Bar text input


//     app.listen(3001, () => {
//     console.log('Now Listening!')
// });

// router.post('syanpsis', async (req, res) => {
//     let response = req.body;
//     res.send('Synapsis' + JSON.stringify(data));
// })

// Display movie results from the API based on search Bar text input

//   searchBtn.on('click', function (event){
//     event.preventDefault();
//     searchHistArr.push(textVal.value);
//     console.log(textVal.value)
//     localStorage.setItem('movies', JSON.stringify(searchHistArr));
// });

module.exports = router;
