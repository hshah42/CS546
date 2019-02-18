const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    try 
    {
        const education = [
            {
              "schoolName": "Stevens Institute of Technology",
              "degree": "Masters of Science",
              "favoriteClass": "Web Programming",
              "favoriteMemory": "A memorable time in Stevens was one where I was doing an assignment for my CS546 class. I had to make an html page form scratch. This was something I had done a lot of times. It always got my creative side out. Looking outside form my classroom I got this amazing view of the New York city skyline and I knew then and there that it inspired me to do this with all my heart. Not a lot of people go through what I did while doing this assignment. It was revolutionary for me."
            }
        ];
        
        res.json(education);
    }
    catch (e) 
    {
        res.status(500).send();
    }

});

module.exports = router;