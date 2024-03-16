
import PropTypes from "prop-types";
const Recipe = ({ recipe_data, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    recipe_img,
    ingredients,
    preparing_time,
    calories,
  } = recipe_data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-8 pt-10">
        <img src={recipe_img} alt={recipe_name} className="rounded-xl" />
      </figure>
      <div className="card-body space-y-6">
        <h2 className="card-title text-xl">{recipe_name}</h2>
        <p className="text-[#878787] text-lg">{short_description}</p>
        <hr />
        <h2 className="card-title text-xl">Spaghetti Bolognese</h2>
        <ul className="text-[#878787] text-lg list-disc ml-6">
          {ingredients.map((data, idx) => (
            <li key={idx}>{data}</li>
          ))}
        </ul>
        <hr />
        <div className=" flex justify-between">
          <p className="text-[#878787] text-lg">
            {" "}
            <span>{preparing_time}</span> Minute
          </p>
          <p className="text-[#878787] text-lg">
            {" "}
            <span>{calories}</span> Calories
          </p>
        </div>
        <div className="card-actions">
          <button onClick={()=>handleWantToCook(recipe_data)} className="btn  bg-[#0BE58A]">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe_data: PropTypes.object,
};

export default Recipe;
