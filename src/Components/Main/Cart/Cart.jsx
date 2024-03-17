import PropTypes from "prop-types"; // ES6
import Item from "../Item/Item";
import Currently_Cooking_Item from "../Currently_Cooking_Item/Currently_Cooking_Item";
import { useState } from "react";

const Cart = ({ cartRecipies, count, setCartRecipes, setCount }) => {

  const [currentlyData, setCurrentlyData] = useState([]);
  const [currentlyCount, setCurrentlyCount] = useState(0)
// console.log(currentlyCount)

  const handleCurrently = (data) => {
    const newCurrentlyData = [...currentlyData, data];
    setCurrentlyData(newCurrentlyData)
    // const filterItem = data.filter((item => item.recipe_id == data.recipe_id))
    // console.log(filterItem)
    const filterData = cartRecipies.filter((item => item.recipe_id != data.recipe_id))
    setCartRecipes(filterData)
    setCount(count - 1)

  };

  // console.log(currentlyData)



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
          Currently cooking: <span>0</span>
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
              <td>Total Time = 45 minutes</td>
              <td>Total Calories = 1050 calories</td>
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
