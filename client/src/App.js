import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route component={() => <h1>NOT FOUND</h1>} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
