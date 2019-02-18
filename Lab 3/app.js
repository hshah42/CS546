const fileData = require("./fileData");
const textMetrics = require("./textMetrics")
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function main(chapter)
{
    let resultFileName = chapter.replace(".txt", ".result.json");
    let isFilePresent = await existsAsync(resultFileName);
    
    if(isFilePresent)
    {
        try
        {
            let fileContents = await fileData.getFileAsJSON(resultFileName);
            console.log(fileContents);
        }
        catch(error)
        {
            console.log(error);
        } 
    }
    else
    {
        try
        {
            let fileContents = await fileData.getFileAsString(chapter);
            let metrics = await textMetrics.createMetrics(fileContents);
            await fileData.saveJSONToFile(resultFileName, metrics);
           
            console.log(metrics);
        } 
        catch (error)
        {
            console.log(error);
        }
       
    }
}

//Got this code from internet as existsAsync was not giving the desired result.
//Source: https://github.com/yortus/asyncawait/issues/10

async function existsAsync(path) 
{
    return new Promise(function (resolve) {
        fs.exists(path, resolve);
    });
}

main("./chapter1.txt");
main("./chapter2.txt");
main("./chapter3.txt");