import React from 'react';
import { useContext } from 'react';
import {useHistory} from "react-router-dom";
import { userContext } from '../../../App';
const Allservices = ({service}) => {
    const[signInUser,setSignInUser]=useContext(userContext)

    const history=useHistory()
    const handleClick=()=>{
        if(signInUser.isAdmin){
            history.push('/dashboard')
        }
        else{
            history.push('/user')  
        }
    }
    return (
     <div onClick={handleClick} className="card service-card shadow-sm col-md-4">
        <div className="card-body text-center">
              <div className="card-scroll1">
                <img className="service-img" src={`data:image/png;base64,${service.image.img}`}  alt=""/>  
                <h6 className="my-2">{service.title}</h6>   
                <p>{service.desc}</p>
              </div>
        </div>
    </div>
    );
};

export default Allservices;