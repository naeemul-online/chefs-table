import PropTypes from "prop-types"; // ES6

const Currently_Cooking_Item = ({item, index}) => {
    // console.log(item)
    const { recipe_name, calories, preparing_time } = item;
    // console.log(typeof recipe_name)
    return (
        <tr>
        <th>{index}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} <span>Minute</span></td>
        <td>{calories} Calories</td>
      </tr>
    );
};

Currently_Cooking_Item.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
  };

export default Currently_Cooking_Item;