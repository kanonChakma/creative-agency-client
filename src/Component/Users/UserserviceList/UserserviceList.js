import React from 'react';
const UserserviceList = ({service}) => {
    return (
      <div className="col-md-6 ">
        <div className="card-body shadow mb-3 service-card">
            <div  className="card-scroll2">
                <div className=" d-flex justify-content-between mb-3">
                      <img className="review-img" height="50" src={`data:image/png;base64,${service.image.img}`}  alt=""/>
                      <span><button className="card-btn">{service.status}</button></span>
                </div>
                <div className="">
                    <h5>{service.category}</h5>   
                    <p>{service.desc}</p>   
                </div>        
            </div>     
        </div>
    </div>
    );
};
export default UserserviceList;