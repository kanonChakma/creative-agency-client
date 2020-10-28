import React, { useEffect, useContext,useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Addservice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart,faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
const Addservice = () => {
    const { register, errors, reset } = useForm();
    const[signInUser,setSignInUser]=useContext(userContext) 

     const[orderInfo,setOrderInfo]=useState({})
     const[file,setFile]=useState(null)
     
     const handleBlur=(e)=>{
         const newOrderInfo={...orderInfo}
         newOrderInfo[e.target.name]=e.target.value;
         setOrderInfo(newOrderInfo)
       }
     const handleFile=(e)=>{
        const newFile=e.target.files[0];
        setFile(newFile)
      }
const handleSubmit = (e) =>{ 
            e.preventDefault();
         const formData = new FormData()
            formData.append('file', file)
            formData.append('desc', orderInfo.desc)
            formData.append('title', orderInfo.title)
            fetch('https://shielded-tundra-08042.herokuapp.com/addservice', {
                method: 'POST',
                body: formData
            }) 
        e.target.reset();
    };
    return(
       <div>
           <div className="d-flex">
                <div className="col-md-4 col-lg-3 col-xl-2 col-sm-5">
                    <Sidebar></Sidebar>
                 </div>
                 <div className="col-md-8 col-lg-8 col-sm-7 mx-auto">
                    <div className="row justify-content-between my-4">
                        <h2 className="mx-3">Order</h2>
                         <div className="d-flex">
                             <img src={signInUser.img} className="admin-img mx-3" alt=""/>
                              <h5 className="admin-img">{signInUser.name}</h5>
                         </div>
                    </div>
                 
                        <form onSubmit={handleSubmit} className="order-form col-xs-2 ">
                            <div className="row">
                                <div className="col-md-6 mb-4 ml-3">
                                    <label htmlFor="title">Service title</label>
                                    <input type="text" id="" onBlur={handleBlur} name="title" placeholder="Enter title" class="form-control w-100"/>
                                </div>
                                <div className="col-md-5">
                                <label htmlFor="">Icon</label>
            
                                     <div className="upload">
                                        <label className="upload-btn">
                                            <FontAwesomeIcon for="file" icon={faCloudUploadAlt}/>
                                                Upload image
                                                <input type="file" id="file" onChange={handleFile} name="file"  placeholder="Upload your image"/>
                                        </label>
                                       
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                               <label htmlFor="">Description</label>
                                 <input type="text" id="desc" onBlur={handleBlur} name="desc" placeholder="Enter description" class="form-control w-100 msg" />
                                 {errors.desc && "desc is required"}
                            </div>
                            <input type="submit" className="mx-3" value="send"/>
                      </form> 
               </div>
           </div>
       </div>
    );
};
export default Addservice;