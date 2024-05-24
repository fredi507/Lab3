import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
 
 return (
 <header>
    <section>
            <nav className="navbar">
                
                <div><img className='logo' src="src\image\logo.jpeg" alt="Logo" /></div>
                    
                    <ul className='menu'>
                        <Link to="/"><li><a className='menu-link'></a>Home</li></Link>
                        <li><a className='menu-link'></a>About</li>
                        <li><a className='menu-link'></a>Contact</li>
                    </ul>
                    
                    <div id="cart">
                        <Link to="/CartPage"><div><img className='cart' src="src\image\cart.png" alt=" "/></div></Link>
                    </div>

                    <div className='botones'>
                        <div className='first'>
                            <Link to="/LoginPage"><button className='ini'>Loguear</button></Link>
                        </div>

                        <div className='second'>
                            <Link to="/RegistrationPage"><button className='ini'>Registrarse</button></Link>
                        </div>
                    </div>
            </nav>
        </section>
 </header>
 );
}
export default Header;
