import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import UserserviceList from '../UserserviceList/UserserviceList';
import ClipLoader from "react-spinners/ClipLoader";
const Userservice = () =>{
    const[allService,setAllservice]=useState([]);
    const[signInUser,setSignInUser]=useContext(userContext) 
    
     useEffect(()=>{
         fetch('http://localhost:5000/servicelist?email='+signInUser.email)
         .then(res=>res.json())
         .then(data=>
            {console.log(data)
            setAllservice(data)}
            )
     },[])
    return(
           <div className="d-flex">
                <div className="col-md-4 col-lg-3 col-xl-2 col-sm-5">
                    <Sidebar></Sidebar>
                 </div>
                 <div className="col-md-8 col-lg-8 col-sm-7 mx-auto">
                    <div className="row justify-content-between my-4">
                        <h3 className="mx-3">Service</h3>
                        <h5>{signInUser.name}</h5>
                    </div>
                    { allService.length===0 && <ClipLoader
                            css=""
                            size={100}
                            color={"#123abc"}
                            loading={true}
                    />}
                   <div className="row">
                       {
                         allService.map(service=><UserserviceList key={service._id} service={service}></UserserviceList>)  
                       }
                   </div> 
               </div>
           </div>
    );
};
export default Userservice;