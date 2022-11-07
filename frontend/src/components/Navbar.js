import { Link } from 'react-router-dom'
import logo from './GPLinksLogo.png'
import './Navbar.css'

const Navbar = () => {
    return ( 
        <body>
            <div>
                <img src={logo} alt="GP-Links logo" />
            </div>

            <div className="navbar">
                <Link to="/">
                    //Homepage\\
                </Link>
                
                <Link to="/loginpage">
                    //Login page\\
                </Link>
                <Link to="/doctors">
                    //doctors\\
                </Link>
            </div>
        </body>
    );
}
 
export default Navbar;