import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const notify = () => toast("You have signed out!");

const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
        <Logo className="logo" />
    </Link>
    <div className="options">
        <Link className="option" to='/shop'>
            SHOP
        </Link>
        <Link className="option" onClick={notify} to='/contact'>
            CONTACT
        </Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          :
          <Link className="option" to='/sign-in'>
          SIGN-IN
        </Link>
        }
         <ToastContainer />
          <ToastContainer />
    </div>
  </div>
);

export default Header;
