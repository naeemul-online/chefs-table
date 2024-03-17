import PropTypes from "prop-types"; // ES6
import Item from "../Item/Item";
import Currently_Cooking_Item from "../Currently_Cooking_Item/Currently_Cooking_Item";
import { useState } from "react";
import Sum from "../Total_Time_And_Calories/Sum";

const Cart = ({ cartRecipies, count, setCartRecipes, setCount }) => {

  const [currentlyData, setCurrentlyData] = useState([]);
// console.log(currentlyCount)
  const [currentCount, setCurrentCount] = useState(0)



  const [calories, setCalories] = useState(0)
  const [minutes, setMinutes] = useState(0)




  const handleCurrently = (data) => {
    console.log(data)
    const newCurrentlyData = [...currentlyData, data];
    setCurrentlyData(newCurrentlyData)
    // const filterItem = data.filter((item => item.recipe_id == data.recipe_id))
    // console.log(filterItem)
    const filterData = cartRecipies.filter((item => item.recipe_id != data.recipe_id))
    setCartRecipes(filterData)
    setCount(count - 1)
    setCurrentCount(currentCount + 1)
    setCalories(calories + data.calories)
    setMinutes(minutes + data.preparing_time)

  };








  return (
    <div className="p-4 border rounded">
      <div className="text-center text-2xl p-2">
        <h2>
          Want to cook: <span>{count}</span>
        </h2>
      </div>
      <hr />
      <div className="overflow-x-auto text-[#878787]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {cartRecipies.map((data, idx) => (
              <Item
                key={idx}
                item_data={data}
                index={idx + 1}
                handleCurrently={handleCurrently}
              ></Item>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center text-2xl p-2">
        <h2>
          
          Currently cooking: <span>{currentCount}</span>
        </h2>
      </div>
      <hr />
      <div className="overflow-x-auto text-[#878787]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              currentlyData.map((item, idx)=> <Currently_Cooking_Item key={idx} item={item} index={idx + 1}></Currently_Cooking_Item>)
            }
            
            {/* row 2 */}
            <tr className="text-bold text-[#000]">
            
              <th></th>
              <td></td>
              <td>Total Time = {minutes} minutes</td>
              <td>Total Calories = {calories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
Cart.propTypes = {
  cartRecipies: PropTypes.array,
};

export default Cart;
