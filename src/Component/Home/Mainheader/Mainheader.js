import React from 'react';
import bg from '../../../images/logos/Frame.png'
const Mainheader = () =>{
    return(
        <main>
           <div  className="my-2 p-1  row d-flex align-items-center">
               <div className="col-md-4 col-sm-6  col-xs-6 offset-md-1">
                   <h1>Let's Grow Your <br/> Brand To The <br/>Next Level</h1>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem sequi placeat magnam voluptatum dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem sequi placeat magnam voluptatum dolores</p>
                   <button className="hire-us mt-3">Hire us</button>
               </div>
                <div className="col-md-6 col-sm-6 col-xs-6 p-5">
                    <img src={bg}  className="img-fluid" alt=""/>
                </div>
           </div>
       </main>
    );
};
export default Mainheader;