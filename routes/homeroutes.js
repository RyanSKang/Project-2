// Adding Dependencies
const router = require('express').Router();
const fetch= require('node-fetch');

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
    getMovieResults('avengers');

} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;
