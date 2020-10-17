import React, { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
const Makeadmin = () => {
    const[updateAdmin,setUpdateAdmin]=useState({})
    const[signInUser,setSignInUser]=useContext(userContext);
    const handleBlur=(e)=>{
      const info={...updateAdmin}
      info[e.target.name]=e.target.value;
      setUpdateAdmin(info)
    }
    const handleButton=()=>{
            fetch('http://localhost:5000/makeadmin',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateAdmin), 
         })
    }
    return (
     <div className="d-flex">
        <div className="col-md-4 col-lg-3 col-xl-2 col-sm-5">
              <Sidebar></Sidebar>
         </div>
         <div className="col-md-8 col-lg-8 col-sm-7 mx-auto">
            <div className="row justify-content-between my-4">
                <h2 className="mx-3">Make admin</h2>
                <div className="d-flex">
                        <img src={signInUser.img} className="admin-img mx-3" alt=""/>
                           <h5  className="admin-img">{signInUser.name}</h5>
                       </div>
               </div> 
            <input onBlur={handleBlur} className="form-control w-75" type="email" name="email" id=""/>
            <button onClick={handleButton} className="btn btn-primary mt-2">update</button>
       </div>
     </div>
    );
};
export default Makeadmin;