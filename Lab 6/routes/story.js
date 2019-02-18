const express = require("express");
const router = express.Router();

router.get("/",  function (req, res) {
    try 
    {
        const story = {
            "storyTitle": "Winter is Coming",
            "story": "Lord Eddard \"Ned\" Stark is the head of House Stark, whose members are involved in plot lines throughout most of the series.\n He and his wife, Catelyn Tully, have five children: Robb, the eldest, followed by Sansa, Arya, Bran and Rickon, the youngest. Ned's illegitimate son Jon Snow and his friend, Samwell Tarly, serve in the Night's Watch under Lord Commander Jeor Mormont. The Wildlings living north of the Wall include young Gilly, and warriors Tormund Giantsbane and Ygritte."
        };
        
        res.json(story);
    }
    catch (e) 
    {
        res.status(500).send();
    }

});

module.exports = router;