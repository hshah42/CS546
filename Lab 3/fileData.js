const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) 
{
    if(!path)
    {
        throw "You must provide a path!";
    }

    let fileContent;

    if(!await existsAsync(path))
    {
        throw "File does not exist!"
    }

    try
    {
        fileContent = await fs.readFileAsync(path,"utf-8");
    }
    catch(error)
    {
        throw "Error in reading file!";
    }

    return fileContent;
}

async function getFileAsJSON(path)
{
    const fileContent = await getFileAsString(path);

    let jsonFile;

    try
    {
        jsonFile = JSON.parse(fileContent);
    }
    catch(error)
    {
        throw "The contents of the file are not in JSON format";
    }

    return jsonFile;
}

async function saveJSONToFile(path, obj)
{
    if(!path || !obj)
    {
        throw "You must provide path and object!";
    }

    if(typeof obj !== "object")
    {
        throw "Please provide an object" ;
    }

    let jsonString;

    try
    {
        jsonString = JSON.stringify(obj, null, 3);
    }
    catch(error)
    {
        throw "Error in parsong JSON! Could not convert obj to json!";
    }

    try
    {
        await saveStringToFile(path, jsonString);
    }
    catch(error)
    {
        throw "Error in writing data to file!";
    }

    return true;
}

async function saveStringToFile(path, text)
{
    if(!path || !text)
    {
        throw "You must provide path and object!";
    }

    if(typeof text !== "string")
    {
        throw "Please provide an object" ;
    }

    try
    {
        await fs.writeFileAsync(path, text);
    }
    catch(error)
    {
        throw "Error in writing data to file!";
    }

    return true;
}

async function existsAsync(path) 
{
    return new Promise(function (resolve) {
        fs.exists(path, resolve);
    });
}

module.exports = {getFileAsString, getFileAsJSON, saveJSONToFile, saveStringToFile}