import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
  // à compléter (modèle des recettes)
});

const RecipesModel = mongoose.model("Recipes", recipesSchema);

export default RecipesModel;
