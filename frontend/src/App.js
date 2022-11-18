import './index.css';
//import Searchbar from './components/Searchbar';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Loginpage from './pages/Loginpage';
import Createaccountpage from './pages/Createaccountpage';
import Doctors from './pages/Doctors';
//import Footerlinks from './components/Footerlinks';
import UserDoctors from './pages/UserDoctors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router> {/*Have to put anything to do with routes inside the Router tag*/}
      <div className="App">
        <Navbar />
        <div className="pages">
          <Switch> {/*Switch component ensures only 1 route component shows at a time*/}
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/loginpage">
              <Loginpage />
            </Route>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <Route path="/createaccountpage">
              <Createaccountpage />
            </Route>
            <Route path="/userdoctors">
              <UserDoctors />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
