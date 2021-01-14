import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route component={() => <h1>NOT FOUND</h1>} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
