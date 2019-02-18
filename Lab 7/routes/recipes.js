const express = require("express");
const router = express.Router();
const recipesData = require("../data/recipe");

router.get("/:id", async (req, res) => {
    try 
    {
      let recipe = await recipesData.getRecipe(req.params.id);

      if(recipe === null)
      {
        res.status(500).json({ error : "No recipe found" });
      }
      else
      {
        res.status(200).json(recipe);
      }
    } 
    catch (e) 
    {
      res.status(500).json({ error: e });
    }
  });

router.get("/", async (req, res) => {
    try 
    {
        let recipes = await recipesData.getRecipesInfo();
        res.status(200).json(recipes);
    } 
    catch (e) 
    {
        res.status(500).json({ error: e });
    }
  });

router.post("/", async (req, res) => {
    const recipeData = req.body;

    try
    {
        const { title, ingredients, steps } = recipeData;
        const newRecipe = await recipesData.addRecipe(title, ingredients, steps);
        res.status(200).json(newRecipe);
    }
    catch(e)
    {
        res.status(500).json({ error : e });
    }

});

router.put("/:id", async(req, res) => {
    const updatedRecipe = req.body;
    try
    {
        const { title, ingredients, steps } = updatedRecipe;
        const newUpdatedRecipes = await recipesData.updateAll(req.params.id, title, ingredients, steps);
        res.status(200).json(newUpdatedRecipes);
    }
    catch(e)
    {
        res.status(500).json({ "error" : e });
    }
});

router.patch("/:id", async (req, res) => {
    const updatedParams = req.body;

    try
    {
        const newUpdatedRecipes = await recipesData.updateSelectedFields(req.params.id, updatedParams);
        res.status(200).json(newUpdatedRecipes);
    }
    catch(e)
    {
        res.status(500).json({ "error" : e });
    }

});

router.delete("/:id", async (req, res) => {
   
    try
    {
        await recipesData.deleteRecipe(req.params.id);
        res.status(200).json({"Deleted":"true"});
    }
    catch(e)
    {
        res.status(500).json({ error : e });
    }

});

module.exports = router;