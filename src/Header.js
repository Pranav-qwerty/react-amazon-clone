import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Menu, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    let button_state = false;
    const showRespMenu = () => {
        let header = document.getElementById("header");
        let search = document.getElementById("search");
        if (button_state == false) {
            button_state = true;
            console.log("Button Pressed")
            document.getElementById("nav").style.display = "flex";
            header.style.height = "200px"
            search.style.display = "flex"
            header.style.flexDirection = "column"
        }else{
            button_state = false;
            console.log("Button Pressed")
            document.getElementById("nav").style.display = "none";
            header.style.height = "60px"
            search.style.display = "none"
            header.style.flexDirection = "row"
        }
    }
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className="header" id="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Icon"/>
            </Link>
            <div className="header_search" id="search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav" id="nav">
                <Link to={!user &&"/login"}>
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email.toString().replace("@gmail.com", "")}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket" id="basket">
                        <ShoppingBasket/>
                        <span className="header_optionLineTwo header_optionCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            <div className="ham-menu" onClick={showRespMenu}><Menu/></div>
        </div>
    )
}

export default Header;
