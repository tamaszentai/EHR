import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Patients from './containers/Patients';
import OrderTypes from './containers/OrderTypes';
import PatientOrder from './containers/PatientOrders';
import PatientOrders from './containers/PatientOrders';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/patients" component={Patients}/>
          <Route path="/ordertypes" component={OrderTypes}/>
          <Route path="/patientorders" component={PatientOrders}/>
        <Patients />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
