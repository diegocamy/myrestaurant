import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Menu from "./pages/Menu";
import Category from "./pages/Category";

import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/menu" component={Menu} />
          <Route path="/login" component={Login} />
          <Route path="/menu/:category" component={Category} />
          <Route path="/product/:id" component={Product} />
          <Route component={() => <h1>NOT FOUND</h1>} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
