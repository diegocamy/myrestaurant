import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route component={() => <h1>NOT FOUND</h1>} />
    </Switch>
  );
}

export default App;
