const mongoCollections = require("./mongoCollections");
const uuid = require('uuid/v1');

async function createTask(title, description)
{
    if(!title || typeof title !== "string")
    {
        throw "Please pass the title or pass in correct format!";
    }

    if(!description || typeof description !== "string")
    {
        throw "Please pass the description or pass it in correct format!";
    }

    let _id = uuid();
    let newToDoList = {
        _id : _id,
        title : title,
        description : description,
        completed : false,
        completedAt : null
    }

    let insert;

    try
    {
        const todoItemsCollection = await mongoCollections.getCollectionFn("todoItems");
        insert = await todoItemsCollection.insertOne(newToDoList);
    }
    catch(error)
    {
        console.log(error)
        throw "Could not insert into mongo database";
    }
    
    if(insert === 0)
    {
        throw "Could not add to do list into collection";
    }

    return newToDoList;
}

async function getAllTasks()
{
    let todoList;

    try
    {
        const todoItemsCollection = await mongoCollections.getCollectionFn("todoItems");
        todoList = await todoItemsCollection.find({}).toArray();
    }
    catch(error)
    {
        throw "Could not get tasks from mongo";
    }

    return todoList;
}

async function getTask(id)
{
    if(!id || typeof id !== "string")
    {
        throw "You must provide an id or pass it in correct format."
    }

    let todoList;

    try
    {
        const todoItemsCollection = await mongoCollections.getCollectionFn("todoItems");
        todoList = await todoItemsCollection.findOne({ _id : id});
    }
    catch(error)
    {
        throw "Could not get task from mongo";
    }
  
    if (todoList === null) 
    {
        throw "No task with the id: " + id;
    }

    return todoList;
}


async function completeTask(taskId)
{
  
    if(!taskId || typeof taskId !== "string")
    {
        throw "You must provide a task id or provide it in correct format."
    }

    let update;
    
    const currentTime = new Date();

    try
    {
        const todoItemsCollection = await mongoCollections.getCollectionFn("todoItems");
        update = await todoItemsCollection.updateOne({ _id : taskId}, {$set: {completed : true, completedAt : currentTime}});
    }
    catch(error)
    {
        throw "Could not update task in mongo";
    }

    if (update.modifiedCount === 0) 
    {
        throw "could not update task successfully";
    }
  
    return await getTask(taskId);
}

async function removeTask(id)
{
    if(!id || typeof id !== "string")
    {
        throw "You must provide an id or provide it in correct format."
    }

    let deleted;

    try
    {
        const todoItemsCollection = await mongoCollections.getCollectionFn("todoItems");
        deleted = await todoItemsCollection.removeOne({ _id: id });
    }
    catch(error)
    {
        throw "Could not remove task from mongo";
    }

    if (deleted.deletedCount === 0)
    {
        throw "Could not delete task with id: " +id;
    }
}

module.exports = {createTask, getAllTasks, getTask, completeTask, removeTask}