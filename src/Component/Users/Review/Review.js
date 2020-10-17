import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const[signInUser,setSignInUser]=useContext(userContext)
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (data,e) =>{
        fetch('http://localhost:5000/review',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
         })
      .then(res=> res.json())
      e.target.reset();
    };
    return (
        <div>
           <div className="d-flex">
                <div className="col-md-4 col-lg-3 col-xl-2 col-sm-5">
                    <Sidebar></Sidebar>
                 </div>
                 <div className="col-md-8 col-lg-8 col-sm-7 mx-auto">
                    <div className="row justify-content-between my-4">
                         <h3 className="mx-3">Review</h3>
                        <h5>{signInUser.name}</h5>
                    </div>
                  <form onSubmit={handleSubmit(onSubmit)}  className="order-form">
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Your name" class="form-control" ref={register({ required: true })} />
                        {errors.email && "name is required"}
                    </div>
                    <div class="form-group">
                        <input type="text" name="company" placeholder="Company's name,Designation" class="form-control" ref={register({ required: true })}/>
                        {errors.name && "company-designation is required"}
                    </div>
                    <div class="form-group">
                        <input type="text" name="comment" placeholder="Messeage here.." class="form-control msg" ref={register({ required: true })}/>
                            {errors.comment && "name is required"}
                    </div>
                       <input type="submit" class=""value="send"/>
                    </form>
               </div>
           </div>
       </div>
    );
};
export default Review;