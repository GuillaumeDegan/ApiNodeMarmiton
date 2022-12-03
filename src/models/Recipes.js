import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  // type de plat (genre dessert/plat/entré)
  category: {
    required: true,
    type: String,
  },
  // id utilisateur ( createur de la recette ) a confirmer en fonction de comment sa marche sur mongodb
  id_user: {
    required: true,
    type: Number,
  },
  //nb perssone
  servings: {
    required: true,
    type: Number,
  },
  ingredients: {
    required: true,
    type: String,
  },
  //etapes
  steps: {
    required: true,
    type: String,
  },
  //si ya besoin de cuisson
  cooking: {
    required: true,
    type: Boolean,
  },
  prepTime: {
    required: false,
    type: Number,
  },
  image: {
    required: true,
    type: String,
  },
});

const RecipesModel = mongoose.model("Recipes", recipesSchema);

export default RecipesModel;
