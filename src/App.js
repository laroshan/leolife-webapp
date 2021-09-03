import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import singleProduct from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import Default from "./pages/Default";
import Footer from "./Components/Footer";
import Contact from "./pages/Contact";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={singleProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
