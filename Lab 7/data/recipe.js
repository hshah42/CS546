const mongoCollections = require("../config/mongoCollections");
const uuid = require("node-uuid");
const collectionName = "lab7-recipes";

async function getAllRecipes() 
{
    const recipeCollection = await mongoCollections.getCollectionFn(collectionName);
    return await recipeCollection.find({}).toArray();
}

async function getRecipesInfo()
{
    const recipeCollection = await mongoCollections.getCollectionFn(collectionName);
    return recipeCollection.find({}).project({ title : 1 }).toArray();
}

async function getRecipe(id)
{
    if(!id)
    {
        throw `Please provide ID`;
    }

    const recipeCollection = await mongoCollections.getCollectionFn(collectionName);
    return recipeCollection.findOne({ _id : id});
}

async function addRecipe(title, ingredients, steps)
{
    await validateData(title, ingredients, steps);

    let recipe = {
        _id : uuid.v4(),
        title : title,
        ingredients : ingredients,
        steps : steps
    }

    const recipeCollection = await mongoCollections.getCollectionFn(collectionName);
    const information = await recipeCollection.insertOne(recipe);

    const id = information.insertedId;

    return await getRecipe(id);
}

async function updateAll(id, title, ingredients, steps)
{
    if(!id)
    {
        throw `Please provide ID`;
    }

    const recipeCollection = await mongoCollections.getCollectionFn(collectionName);
    
    await checkIfRecipePresent(id);
    await validateData(title, ingredients, steps);
    
    let updatedRecipeData = {
        title : title,
        ingredients : ingredients,
        steps : steps
    }
     
    let updateCommand = {
        $set : updatedRecipeData
    }

    let query = {
        _id : id
    }

    await recipeCollection.updateOne(query, updateCommand);

    return await getRecipe(id);
}

async function updateSelectedFields(id, updatedPostData)
{
    const recipeCollection = await mongoCollections.getCollectionFn(collectionName);

    if(!id)
    {
        throw `Please provide ID`;
    }

    let recipe = await checkIfRecipePresent(id);
    let updates = {};

    if(updatedPostData.title)
    {
        updates.title = updatedPostData.title;
    }

    if(updatedPostData.ingredients)
    {
        if(!Array.isArray(updatedPostData.ingredients))
        {
            throw "Ingredients is not in correct format";
        }
        else
        {
            for(let index in updatedPostData.ingredients)
            {
                if(!updatedPostData.ingredients[index].name)
                {
                    throw "Name of ingredient is not present!"
                }
                else if(!updatedPostData.ingredients[index].amount)
                {
                    throw "Amount required is not present"
                }
            }
        }

        updates.ingredients = updatedPostData.ingredients;
    }

    if(updatedPostData.steps)
    {
        if(!Array.isArray(updatedPostData.steps))
        {
            throw "Steps is not in the correct format";
        }

        updates.steps = updatedPostData.steps;
    }

    let updateCommand = {
        $set : updates
    }

    let query = {
        _id : id
    }

    await recipeCollection.updateOne(query, updateCommand);

    return await getRecipe(id);
}

async function deleteRecipe(id)
{
    await checkIfRecipePresent(id);

    const recipeCollection = await mongoCollections.getCollectionFn(collectionName);

    const deletedInformation = await recipeCollection.removeOne({ _id : id });

    if(deletedInformation.deletedCount === 0)
    {
        throw `Could not delete item with id ${id} for some reason`
    }
}

async function checkIfRecipePresent(id)
{
    let recipe = getRecipe(id);

    if(!recipe)
    {
        throw `No recipe with ${id} found`
    }

    return recipe;
}

async function validateData(title, ingredients, steps)
{
    if(!title)
    {
        throw "Title is not present!";
    }

    if(!ingredients)
    {
        throw "Ingredients are not sent";
    }

    if(!steps)
    {
        throw "Steps to make it are not defined";
    }

    if(!Array.isArray(ingredients))
    {
        throw "Ingredients sent are not in the correct format, please send an array";
    }
    else
    {
        for(let index in ingredients)
        {
            if(!ingredients[index].name)
            {
                throw "Name of ingredient is not present!"
            }
            else if(!ingredients[index].amount)
            {
                throw "Amount required is not present"
            }
        }
    }

    if(!Array.isArray(steps))
    {
        throw "Steps should be sent in an array";
    }
}

module.exports = {getAllRecipes, getRecipesInfo, getRecipe, addRecipe, updateAll, updateSelectedFields, deleteRecipe}