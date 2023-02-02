// import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {
    return ( 
        <header className="d-flex justify-between align-center p-40">

        <Link to='/'>  
          <div className="d-flex align-center">
            <img  width={40} height={40} alt='logo' src="/img/logo.png"/>
              <div className='headerInfo' >
                <h3 className='headerInfoTitle text-uppercase'>React Sneackers</h3>
                <p className='headerInfoText opacity-5'>Магазин кроссовок</p>
              </div>
          </div></Link>

          <ul className='d-flex '>
            <li onClick={props.onClickCart} className="mr-30 cu-p"> <img width={18} height={18} src="/img/cart.svg"/> <span>1205 руб.</span> </li>

            <li><Link to='/favourites'><img className="mr-20 cu-p" width={18} height={18} alt="heart" src="/img/heart.svg"/></Link></li>

            <li> <img className=" cu-p"  width={18} height={18} alt="user" src="/img/user.svg"/> </li>
          </ul>
        </header>
     );
}
 
export default Header;