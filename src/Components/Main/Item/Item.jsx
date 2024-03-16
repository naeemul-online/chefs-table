const Item = ({item_data}) => {
    console.log(item_data)
    const {recipe_name, calories, preparing_time} = item_data
  return (
    <tr>
      <th>1</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} Minute</td>
      <td>{calories} calories</td>
      <button className="btn bg-green-400">Preparing</button>
    </tr>
  );
};

export default Item;
