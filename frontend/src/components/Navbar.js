import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import logo from './GPLinksLogo.png'
import award from './Award.png'
import './Navbar.css'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return ( 
        <div className='navigationBar'>
            <div>
                <img src={logo} alt="GP-Links logo" />
                <img className='Award' src={award} alt="Review"/>
            </div>

            <nav class="navbar navbar-expand navbar-dark bg-success" aria-label="Second navbar example">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Homepage</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/doctors">Doctors Page</a>
                            </li>
                            {!user && (
                                <div>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/loginpage">Log in</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/createaccountpage">Sign up</a>
                                    </li>
                                </div>
                            )}

                            {user && (
                                <div>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/userinfopage">My Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/userdoctors">My Doctors</a>
                                    </li>
                                    <span>{user.username}</span>
                                    <button onClick={handleClick}>
                                        Log out
                                    </button>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;