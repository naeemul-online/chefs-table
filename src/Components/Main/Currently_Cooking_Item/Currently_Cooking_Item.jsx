

const Currently_Cooking_Item = ({item, index}) => {
    // console.log(item)
    const { recipe_name, calories, preparing_time } = item;
    return (
        <tr>
        <th>{index}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} <span>Minute</span></td>
        <td>{calories} Calories</td>
      </tr>
    );
};

export default Currently_Cooking_Item;