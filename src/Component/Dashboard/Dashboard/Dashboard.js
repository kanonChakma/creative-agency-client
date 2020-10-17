import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ClipLoader from "react-spinners/ClipLoader";
const Dashboard=()=>{
const[signInUser,setSignInUser]=useContext(userContext);
 const[data,setData]=useState([])
 
    useEffect(()=>{
      fetch('http://localhost:5000/getallservice')
      .then(res =>res.json())
      .then(result=>{
          setData(result);
      })
    },[])
    const handleChange=(id)=>{
        const opt=document.getElementById('select').value; 
        const option={opt};      
        console.log(option)
        fetch(`http://localhost:5000/update/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(option)
        })
    }
    return(
      <div className="d-flex">
        <div className="col-md-4 col-lg-3 col-xl-2 col-sm-5">
            <Sidebar></Sidebar>
        </div>
       <div className="col-md-8 col-lg-8 col-sm-7 mx-auto">
          <div className="row justify-content-between my-4">
              <h2 className="mx-3">Order</h2>
              <div className="d-flex text-center align-items-center">
                             <img src={signInUser.img} className="admin-img mx-3" alt=""/>
                      <h5 className="admin-img">{signInUser.name}</h5>
                </div>
          </div>
          <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                    </thead> 
                    <tbody>
                      
                </tbody>
            
                <tbody>
                    {
                    data.map(info=>
                        <tr>
                        <td>{info.name}</td>
                        <td>{info.email}</td>
                        <td>{info.category}</td>
                        <td>{info.desc}</td>
                        <td>
                        <select onChange={()=>handleChange(info._id)} id="select">
                                <option value="Pending">{info.status}</option>
                                <option value="Done">done</option>
                                <option value="Ongoing">ongoing</option>
                        </select>
                        </td>
                    </tr>    
                    )
                 }     
                </tbody>
            </Table>
            { data.length===0 && <ClipLoader
                css=""
                size={100}
                color={"#123abc"}
                loading={true}
        />}

        </div>
      </div>
    );
};
export default Dashboard;