import React from 'react';
import logo1 from '../../../images/logos/airbnb.png'
import logo2 from '../../../images/logos/google.png'
import logo3 from '../../../images/logos/netflix.png'
import logo4 from '../../../images/logos/slack.png'
import logo5 from '../../../images/logos/uber.png'
const Allcompany = () => {
    return (
        <section className="my-5 py-5">
            <div className="container text-center mb-5">
                <div className="row d-flex justify-content-between align-items-center my-5" >
                   <div className="col-md-4 col-sm-6 col-lg-2"><img className=" company-logo"  src={logo4} alt=""/> </div>
                   <div className="col-md-4 col-sm-6 col-lg-2"><img className="img-fluid company-logo" src={logo3}  alt=""/></div>
                   <div className="col-md-4 col-sm-6 col-lg-2"><img className="img-fluid company-logo" src={logo1} alt=""/></div>
                   <div className="col-md-4  col-sm-6 col-lg-2"><img className="img-fluid company-logo" src={logo2} alt=""/></div>
                   <div className="col-md-4  col-sm-6 col-lg-2"><img className="img-fluid company-logo" src={logo5} alt=""/></div>            
                </div>
            </div>
        </section>
    );
};
export default Allcompany;