const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    try 
    {
        const about = {
            "name": "Hem Shah",
            "cwid": "10432319",
            "biography": "I am a French football manager and former player. I was the manager of Arsenal from 1996 to 2018. I was the longest-serving and most successful in club history. My contribution to English football through changes to scouting, players' training and diet regimens revitalised Arsenal and aided the globalisation of the sport in the 21st century.",
            "favoriteShows": ["Friends", "Game of thrones", "Brooklyn nine nine", "Entourage"],
            "hobbies": ["Coding", "Driving", "PMovies"]
          };
        
        res.json(about);
    }
    catch (e) 
    {
        res.status(500).send();
    }

});

module.exports = router;