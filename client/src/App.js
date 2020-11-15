import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Navigation from './components/Navigation';
import PatientList from './containers/PatientList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <PatientList />

      </Router>
    
    </div>
  );
}

export default App;
