import "./App.css";
import Banner from "./Components/Header/Banner";
import Navbar from "./Components/Header/Navbar";
import Cart from "./Components/Main/Cart/Cart";
import Header from "./Components/Main/Header";
import Recipes from "./Components/Main/Recipes/Recipes";

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="container mx-auto">
        <Header></Header>
        <section className="md:grid md:grid-cols-3">
          <Recipes className=""></Recipes>
          <Cart></Cart>
        </section>
      </main>
    </>
  );
}

export default App;
