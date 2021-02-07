import './App.css';
import { Route, Router } from 'react-router-dom';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Users} />
        {/* <Route exact path="/bp-calculator" component={Bpcalculator} />
        <Route exact path="/kidney-calculator" component={Kidneycalculator} /> */}
      </Router>
    </div>
  );
}

export default App;
