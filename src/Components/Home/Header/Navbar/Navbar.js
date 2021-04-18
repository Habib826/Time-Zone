
import { Link } from 'react-router-dom';
import logo from '../../../../images/log.png'


const Navbar = () => {
   
    return (
        <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
      <Link to="/"><img className="img-fluid ml-3" style={{width:'200px'}} src={logo} alt=""/></Link>

        <div className="ml-auto">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             <Link to="/home" ><a className="nav-link mr-4">Home</a></Link> 
            </li>
            <li className="nav-item">
                <a className="nav-link mr-4" href="#">About Us</a>
            </li> 
            <li className="nav-item">
              <Link to="/book"><a className="nav-link mr-4" href="#">Dash Board</a></Link>  
            </li>
            <li className="nav-item">
            <Link to='/admin'><Link to="/admin"> <a className="nav-link mr-4">Admin</a></Link></Link>   
            </li>
            <li className="nav-item">
             {
                 <Link to="/login"><a className="nav-link mr-4" >Login</a></Link> 
               
             }
            </li>
            </ul>
        
        </div>
       </div>
   </nav>
        </div>
    );
};

export default Navbar;