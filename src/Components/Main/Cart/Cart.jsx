import PropTypes from 'prop-types'; // ES6
import Item from '../Item/Item';

const Cart = ({cartRecipies}) => {

  return (
    <div className="col-span-1 border p-8">
      <div className="text-center text-2xl p-2">
        <h2>
          Want to cook: <span>0</span>
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
              cartRecipies.map((data, idx)=><Item key={idx} item_data={data}></Item>)
            }

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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 1 */}
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
