import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipies] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((recipe) => setRecipies(recipe));
  }, []);

  return (
    <div className="col-span-2 p-4 border rounded">
      <div className="grid md:grid-cols-2 gap-4 mx-auto">
        {recipes.map((recipe_data) => (
          <Recipe
            key={recipe_data.id}
            recipe_data={recipe_data}
            handleWantToCook={handleWantToCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipe_data: PropTypes.object,
};

export default Recipes;
