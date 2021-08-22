import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import singleProduct from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import Default from "./pages/Default";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={singleProduct} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
