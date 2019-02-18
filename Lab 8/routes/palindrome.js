const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    let body = req.body;
    let palindromeString = body["text-to-test"];
    let hasErrors = false;
    let errors = [];

    if(palindromeString === undefined || palindromeString.length === 0 )
    {
        hasErrors = true;
        errors.push("No string entered!");
        res.status(400);
        res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
        return;
    }

    let result = await checkIfPalindrome(palindromeString);

    let renderData = {
        isPalindrome: result,
        text_to_test: palindromeString
    }

    res.render("layouts/result", renderData);
});

async function checkIfPalindrome(string)
{
    if(typeof string !== "string")
    {
        throw "The data is not of the type string";
    }

    let finalStringToCheck = await removeSpaceAndPunctuations(string);

    if(finalStringToCheck.length === 0)
    {
        return false;
    }

    for(let i = 0 ; i < finalStringToCheck.length ; i++)
    {
        if(finalStringToCheck.charAt(i) !== finalStringToCheck.charAt((finalStringToCheck.length - 1) - i))
        {
            return false;
        }
    }

    return true;
}

async function removeSpaceAndPunctuations(string)
{
    let finalString = "";

    for(let i = 0; i < string.length ; i++)
    {
        if(!(/[^a-zA-Z]/.test(string.charAt(i))))
        {
            finalString = finalString.concat(string.charAt(i).toLowerCase());
        }
    }

    return finalString;
}

module.exports = router;