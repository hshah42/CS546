const todo = require("./todo");
const connection = require("./mongoConnection");

async function main()
{
    let _newId;
    let _id;

    try
    {
        console.log("Inseting a task!");
        let task = await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        _id = task._id;
        console.log(task);    
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Inseting a task!");
        let task = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        _newId = task._id;
        console.log(task);    
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Getting all tasks!");
        console.log(await todo.getAllTasks());
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Deleting a task!");
        const deleted = await todo.removeTask(_id);
        console.log("DELETED");
    }
    catch(error)
    {
        console.error(error);
    }

    try 
    {
        console.log("Trying to get the id we removed!")
        await todo.getTask(_id);
    } 
    catch (error) 
    {
      console.error(error);
    }

    try
    {
        console.log("Getting all tasks!");
        console.log(await todo.getAllTasks());
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Completing a task!");
        const task = await todo.getTask(_newId);
        console.log(await todo.completeTask(task._id));
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Getting a task with the updated values!");
        console.log(await todo.getTask(_newId));
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Checking error for create task by not passing one of the vars");
        const _id = await todo.createTask("Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log(_id);    
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Checking error for delete task by passing wrong id");
        const deleted = await todo.removeTask("fake id");
        console.log(_id);    
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Checking error for complete task by passing wrong id");
        console.log(await todo.completeTask("fake id"));
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Checking error for get task by passing wrong id");
        console.log(await todo.getTask("fake id"));
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Checking error for get task by not passing id");
        console.log(await todo.getTask());
    }
    catch(error)
    {
        console.error(error);
    }

    try
    {
        console.log("Checking error for get task by passing wrong data type");
        console.log(await todo.getTask([1,2,3]));
    }
    catch(error)
    {
        console.error(error);
    }

    const db = await connection.connection();
    await db.serverConfig.close();

    console.log("Done!");
}

main().catch(error => {
    console.log(error);
  });