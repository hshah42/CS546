
async function createMetrics(text)
{
    if(typeof text !== "string")
    {
        throw "You must pass a string as an argument"
    }

    let chars = text.toLowerCase().split("");
    let totalLetters = 0;
    let totalNonLetters = 0;
    let totalVowels = 0;
    let totalConsonants = 0;

    let words = [];
    let tempWord = "";

    for(let i in chars)
    {         
        if(/[^a-zA-Z]/.test(chars[i]))
        {
            totalNonLetters++;

            if(chars[i] === "\'")
            {
                continue;
            }

            if(tempWord !== "")
            {
                words.push(tempWord);
                tempWord = "";
            }  
        }
        else
        {
            totalLetters++;

            if(chars[i] === 'A' || chars[i] === 'a' || chars[i] === 'E' || chars[i]==='e' || chars[i]==='I' || chars[i]==='i' || chars[i]==='O' || chars[i]==='o' || chars[i]==='U' || chars[i]==='u')
            {
                totalVowels++;
            }
            else
            {
                totalConsonants++;
            }

            tempWord = tempWord.concat(chars[i]);
        }
    }

    let totalWords = words.length;
    let longWords = 0;
    let totalCount = 0;
    let uniqueWords=0;
    let wordOccrence = {};

    for(let wordIndex in words)
    {
        if(words[wordIndex].length >= 6)
        {
            longWords++;
        }

        totalCount += words[wordIndex].length;
        
        if(wordOccrence[words[wordIndex]] === undefined)
        {
            wordOccrence[words[wordIndex]] = 1;
            uniqueWords++;
        }
        else
        {
            let count = wordOccrence[words[wordIndex]];
            count++;
            wordOccrence[words[wordIndex]] = count;
        }
    }

    let averageWordLength  = totalCount/totalWords;

    let finalObject = {
        "totalLetters": totalLetters,
        "totalNonLetters": totalNonLetters,
        "totalWords": totalWords,
        "totalVowels": totalVowels,
        "totalConsonants": totalConsonants,
        "uniqueWords": uniqueWords,
        "longWords": longWords,
        "averageWordLength": averageWordLength,
        "wordOccurrences": wordOccrence
    }
    
    return finalObject;
}

module.exports = {createMetrics}