import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'
const Contact = () => {
    const { register, errors, handleSubmit } = useForm();
    return (
       <section className="contact-page my-5 py-5">
           <div className="container">
             <div className="row">
             <div className="col-md-5 col-sm-12">
                  <h1 className="">
                      Let us handle your <br/> project,professionally.
                    </h1>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis debitis eum assumenda accusantium, suscipit sunt?</p>
              </div>
              <div className="col-md-7 col-sm-12">
                  <form>
                    <div  className="form-group col-md-12">
                        <input type="email" name="email" placeholder="Your Email address" class="form-control" ref={register({ required: true })} />
                        {errors.email && "email is required"}
                    </div>
                    <div  className="form-group col-md-12">
                        <input type="text" name="name" className="w-100" placeholder="Your name/Company name" class="form-control" ref={register({ required: true })}/>
                        {errors.name && "name is required"}
                    </div>
                    <div className="form-group col-md-12">
                        <textarea name="area" id="" className="w-100" placeholder="Your messeage" cols="95" rows="5"></textarea>
                        {errors.area && "name is required"}
                    </div>
                    <input type="submit" className="hire-us mx-3" value="send"/>
                 </form>
              </div>
             </div>
           </div>
       </section>
    );
};
export default Contact;