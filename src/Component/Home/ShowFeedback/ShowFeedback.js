import React, { useContext } from 'react';
import { userContext } from '../../../App';

const ShowFeedback = ({feedback}) => {
    const[signInUser,setSignInUser]=useContext(userContext)
    return (
            <div className="col-md-4">
                <div className="card review-card shadow-sm">
                    <div className="d-flex mt-2">
                      <img className="review-img mx-2" src={signInUser.img} alt=""/>
                        <div>
                            <h5>{feedback.name}</h5>
                            <h6>{feedback.company}</h6>
                        </div>
                     </div>
                 <div className="card-body">
                     <p>{feedback.comment}</p>
                     </div>
             </div>
        </div>
    );
};
export default ShowFeedback;