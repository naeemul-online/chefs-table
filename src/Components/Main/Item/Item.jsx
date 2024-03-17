const Item = ({ item_data, index, handleCurrently}) => {
//   console.log(item_data)
  const { recipe_name, calories, preparing_time, setCount } = item_data;
  console.log(setCount)
  return (
    <tr>
      <th>{index}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} Minute</td>
      <td>{calories} calories</td>
      <button onClick={()=>handleCurrently(item_data)} className="btn bg-green-400">Preparing</button>    
    </tr>
  );
};

export default Item;
