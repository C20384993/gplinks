import { Link } from 'react-router-dom'
import UserForm from '../components/UserForm';

const Loginpage = () => {
    return (
    <div className="loginpage">	
        <article className='centerArticle'>
             Form for login and create accounts
             <UserForm />
            </article>
    </div> 
     );
}
 
export default Loginpage;