import  'bootstrap/dist/css/bootstrap.min.css' ;

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';
import NavLink from 'react-bootstrap/esm/NavLink';

const Navbar = () => {
  //TODO hoja de estilo con al Navbar. colocar el brand
  //TODO acomodar carWitdget 
    return (
      <>
         <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-with justify-content-between">
                <a className="navbar-brand" href="/">TIENDA BEBIDAS</a> 

                
                <div className="collapse navbar-collapse"></div>
                <div className="collapse navbar-collapse" id="navbar-list-9">
                    <ul className="navbar-nav navbar-center">
                        <li className="nav-item">
                            <NavLink to="/" className ="nav-link">INICIO</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/bebidas" className ="nav-link">BEBIDAS</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/nosotros" className ="nav-link">NOSOTROS</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/contacto" className ="nav-link">CONTACTO</NavLink> 
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end " id="navbar-list-9">
                    <CartWidget/>  
                </div>
            </nav>            

        </div>
    
    </>

  );
}

export default Navbar;