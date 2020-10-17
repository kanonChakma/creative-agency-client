import React, { useState } from 'react';
import { useEffect } from 'react';
import Allservices from '../Allservices/Allservices';
const Services = () => {
         const[services,setService]=useState([])
         useEffect(()=>{
            fetch('http://localhost:5000/getservice')
            .then(res =>res.json())
            .then(result=>{
                setService(result);
            })
         },[])
    return (
       <section className="services mb-5 pb-5"> 
          <div className="container">
              <h2 className="text-center my-5">Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
              <div className="row card-deck">
                {
                  services.map(data=><Allservices service={data} key={data._id}></Allservices>)
                }
              </div>
          </div>
       </section>
    );
};

export default Services;