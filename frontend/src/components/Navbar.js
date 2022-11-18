import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import logo from './GPLinksLogo.png'
import './Navbar.css'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return ( 
        <div className='navbar'>
            <div>
                <img src={logo} alt="GP-Links logo" />
            </div>

            <div className="navbar">
                <Link to="/">
                    //Homepage\\
                </Link>
                {!user && (
                    <div>
                        <Link to="/loginpage">
                            //Login page\\
                        </Link>
                        <Link to="/createaccountpage">
                            //Sign up\\
                        </Link>
                    </div>
                )}
                <Link to="/doctors">
                    //doctors\\
                </Link>
                <Link to="/userdoctors">
                    //user's doctors\\
                </Link>
                {user && (
                    <div>
                        <span>{user.username}</span>
                        <button onClick={handleClick}>
                            Log out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Navbar;