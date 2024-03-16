import PropTypes from 'prop-types'; // ES6
import { useState } from "react";
import "./App.css";
import Banner from "./Components/Header/Banner";
import Navbar from "./Components/Header/Navbar";
import Cart from "./Components/Main/Cart/Cart";
import Header from "./Components/Main/Header";
import Recipes from "./Components/Main/Recipes/Recipes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartRecipies, setCartRecipes] = useState([])
  const[count, setCount] = useState(0)

  const handleWantToCook = (recipes_data) => {
    const isExist = cartRecipies.find((item=>item.recipe_id == recipes_data.recipe_id))
    if(!isExist){
      setCartRecipes([...cartRecipies, recipes_data]);
      setCount(count + 1)
    } else {
      notify()
    }
   
  }
  const notify = () => toast("This item already added !");
  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="container mx-auto mb-10">
        <Header></Header>
        <ToastContainer />
        <section className="lg:grid lg:grid-cols-3 gap-4">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Cart key={cartRecipies.id} cartRecipies={cartRecipies} count={count} ></Cart>
          
        </section>
      </main>
    </>
  );
}

App.propTypes = {
  cartRecipies: PropTypes.array
};

export default App;
