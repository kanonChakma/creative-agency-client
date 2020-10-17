import React, { useEffect, useContext,useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = () => {
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
            formData.append('name', signInUser.name)
            formData.append('email', signInUser.email)
            formData.append('price', orderInfo.price)
            formData.append('desc', orderInfo.desc)
            formData.append('category', orderInfo.category)
            formData.append('status','pending')
            fetch('http://localhost:5000/addOrder', {
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
                        <h3 className="mx-3">Order</h3>
                        <h5>{signInUser.name}</h5>
                    </div>
                        <form onSubmit={handleSubmit} className="order-form col-xs-2 ">
                            <div class="form-group">
                                <input type="email" onBlur={handleBlur} name="email" value={signInUser.email} class="form-control" ref={register({ required: true })} />
                            
                            </div>
                            <div class="form-group">
                                <input type="text" onBlur={handleBlur} name="name" value={signInUser.name} class="form-control" ref={register({ required: true })}/>
                                {errors.name && "name is required"}
                            </div>
                            <div class="form-group">
                                <input type="text" onBlur={handleBlur} name="category" placeholder="Graphic design" class="form-control" ref={register({ required: true })} />
                                {errors.category && "category is required"}
                            </div>
                            <div class="form-group">
                                <input type="text" onBlur={handleBlur} name="desc" placeholder="Your messeage" class="form-control msg" ref={register({ required: true })} />
                                 {errors.desc && "desc is required"}
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <input type="tenumbert" onBlur={handleBlur} name="price" placeholder="price" class="form-control"/>
                                </div>
                                <div className="col-md-6">
                                <div className="upload">
                                        <label className="upload-btn">
                                            <FontAwesomeIcon for="file" icon={faCloudUploadAlt}/>
                                                Upload image
                                                <input type="file" id="file" onChange={handleFile} name="file"  placeholder="Upload your image"/>
                                        </label>                                                                         
                                </div>
                                </div>
                            </div>
                            <input type="submit" class=""value="send"/>
                      </form> 
               </div>
           </div>
       </div>
    );
};

export default Users;