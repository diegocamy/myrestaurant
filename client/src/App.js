import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={() => <h1>NOT FOUND</h1>} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
