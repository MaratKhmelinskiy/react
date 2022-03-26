
import img from '../images/qaHomePage.png';
import { Link,useHistory } from 'react-router-dom';
import {signout, isAuth} from '../helpers/auth';


const Home = () => {
    const history = useHistory();

    const logout=e=>{
        e.preventDefault();
        alert("Logging outt.");
        signout();
        history.replace('/');
        
    }

    return ( 
    <div>
        <nav className="nav2">
        <Link to="/Profile" style={{fontSize: 40,  color:'black', border:'2px solid black'}}>Профиль</Link>
        <Link to='/About' style={{fontSize: 40, color:'black',border:'2px solid black' }}>Подкасты</Link>
        <Link to='/Courses' style={{fontSize: 40, color:'black',border:'2px solid black' }}>Курсы</Link>
        <Link to='/Features' style={{fontSize: 40, color:'black',border:'2px solid black' }}>Трудоустройство</Link>
    </nav>
    <img src ={img}  alt="IMAGE" width="5000" />
    <nav className="nav2">
        {/*<Link to="/Contact" style={{fontSize: 150,  color:'black', border:'15px solid black'}}>Contact</Link>*/}
        {/* <Link to='/FAQ' style={{fontSize: 50, color:'black',border:'5px solid black' }}>FAQ</Link> */}
        {isAuth()!==false? <>
        <Link href="#" style={{fontSize: 50, color:'black',border:'5px solid black' }} onClick={logout}>Signout</Link>
        </>:<> 
           </>}
    </nav>
    </div>
    
     );
}
 
export default Home;