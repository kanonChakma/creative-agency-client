import React, { useEffect, useState } from 'react';
import ShowFeedback from '../ShowFeedback/ShowFeedback';
const Feedback = () => {
    const[feedBack,setFeedback]=useState([])
         useEffect(()=>{
            fetch('http://localhost:5000/getreview')
            .then(res =>res.json())
            .then(result=>{
                setFeedback(result);
            })
         },[])
    return (
       <section className="my-5 py-5">
           <div className="container">
               <h2 className="text-center mb-5">Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
               <div className="row">
                   {
                     feedBack.map(data=><ShowFeedback feedback={data} key={data._id}></ShowFeedback>)
                   }
               </div>
           </div>
       </section>
    );
};
export default Feedback;