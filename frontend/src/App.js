import './index.css';
//import Searchbar from './components/Searchbar';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Loginpage from './pages/Loginpage';
import Createaccountpage from './pages/CreateAccountpage';
import Doctors from './pages/Doctors';
//import Footerlinks from './components/Footerlinks';
import UserDoctors from './pages/UserDoctors';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link> 
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
    </div>
  );
}

export default App;
