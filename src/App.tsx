import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route 
          path="/"
          exact
          component={Home}
        />
      </Router>
    </div>
  );
}

export default App;
