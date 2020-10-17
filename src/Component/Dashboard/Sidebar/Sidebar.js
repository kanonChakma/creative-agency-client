import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faShoppingCart,faShoppingBasket,faCommentAlt,faUserPlus,faPlus} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import img from'../../../images/logos/logo.png';
import { userContext } from '../../../App';
const Sidebar = () =>{
    const[signInUser,setSignInUser]=useContext(userContext)
    return(
        <div className="sidebar">
              <div className="mt-3">
                  <Link to="/home"> <img src={img} width="190" alt=""/></Link>
              </div>
             <div className="my-5 px-4">
               {signInUser.isAdmin && <div>              
                    <p><FontAwesomeIcon icon={faShoppingBasket}/><Link to="/dashboard"><span className="mx-2">Servic list</span></Link></p>
                    <p><FontAwesomeIcon icon={faPlus}/><Link to="/addservice"><span className="mx-2">Add service</span></Link></p> 
                    <p><FontAwesomeIcon icon={faUserPlus}/><Link to="/makeadmin"><span className="mx-2">Make admin</span></Link></p>                    
                </div>}
                {!signInUser.isAdmin && <div>
                    <p><FontAwesomeIcon icon={faShoppingCart}/><Link to="/user"><span className="mx-2">Order</span></Link></p> 
                    <p><FontAwesomeIcon icon={faShoppingBasket}/><Link to="/userservice"><span className="mx-2">Servic list</span></Link></p>
                    <p><FontAwesomeIcon icon={faCommentAlt}/><Link to="/review"><span className="mx-2">Review</span></Link></p>
                </div>}
          </div>
     </div>
    );
};
export default Sidebar;