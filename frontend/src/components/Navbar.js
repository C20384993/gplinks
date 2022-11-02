import { Link } from 'react-router-dom'
import weblogo from './GPLinksLogo.png'

const Navbar = () => {
    return ( 
        <header>
            <div className="navbar">
                <Link to="/">
                    Homepage
                </Link>
                <Link to="/loginpage">
                    Login page
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;