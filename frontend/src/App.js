import './index.css';
import weblogo from './components/GPLinksLogo.png';
import Searchbar from './components/Searchbar';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Loginpage from './pages/Loginpage';
import Footerlinks from './components/Footerlinks';
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
