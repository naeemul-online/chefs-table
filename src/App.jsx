import PropTypes from 'prop-types'; // ES6
import { useState } from "react";
import "./App.css";
import Banner from "./Components/Header/Banner";
import Navbar from "./Components/Header/Navbar";
import Cart from "./Components/Main/Cart/Cart";
import Header from "./Components/Main/Header";
import Recipes from "./Components/Main/Recipes/Recipes";

function App() {
  const [cartRecipies, setCartRecipes] = useState([])

  const handleWantToCook = (recipes_data) => {
    const isExist = cartRecipies.find((item=>item.recipe_id == recipes_data.recipe_id))
    if(!isExist){
      setCartRecipes([...cartRecipies, recipes_data]);
    } else {
      alert("Already added")
    }
   
  }
  // console.log(cartRecipies)
  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="container mx-auto mb-10">
        <Header></Header>
        <section className="md:grid md:grid-cols-3">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Cart key={cartRecipies.id} cartRecipies={cartRecipies} ></Cart>
        </section>
      </main>
    </>
  );
}

App.propTypes = {
  cartRecipies: PropTypes.array
};

export default App;
