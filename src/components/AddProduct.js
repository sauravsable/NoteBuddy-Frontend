import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [name,setname]=useState("");
  const [rollnumber,setrollnumber]=useState("");
  const [semester,setsemester]=useState("");
  const [subject,setsubject]=useState("");
  const [mobilenumber,setmobilenumber]=useState("");
  const [address,setaddress]=useState("");
  const [status,setstatus]=useState("");
  const [errors,seterrors]=useState({})
  const navigate=useNavigate();
  
  const validation=(name,rollnumber,semester,subject,mobilenumber,address)=>{
   const error={};

   if(name===""){
    error.name="Name is Required";
   }
   
   if(rollnumber===""){
    error.rollnumber="RollNumber is Required";
   }

   if(semester===""){
    error.semester="Semester is Required";
   }

   if(subject===""){
    error.subject="Subject is Required";
   }

   if(mobilenumber===""){
    error.mobilenumber="Mobile Number is Required";
   }

   if(address===""){
    error.address="Address is Required";
   }
   if(status===""){
    error.status="Status is Required";
   }
   seterrors(error);
   return Object.keys(error).length === 0
  }

  const insertdata=async(e)=>{
    e.preventDefault();

    if(validation(name,rollnumber,semester,subject,mobilenumber,address,status)){
      const res= await axios.post("http://localhost:5000/addproduct",{name,rollnumber,semester,subject,mobilenumber,address,status},{withCredentials:'include'});
      console.warn(res);
      setname("")
      setrollnumber("");
      setsemester("");
      setsubject("");
      setmobilenumber("");
      setaddress("");
      setstatus("");
      navigate('/');
    }

 
  }

  return (
    <div className='add'>
      <h1 className='heading'>Add Product</h1>
      <input className='inputBox' type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder='Enter Name'/>
      {errors.name && <span>{errors.name}</span>}
      <input className='inputBox' type="text" onChange={(e)=>setrollnumber(e.target.value)} value={rollnumber} placeholder='Enter Rollnumber'/>
      {errors.rollnumber && <span>{errors.rollnumber}</span>}
      <input className='inputBox' type="text" onChange={(e)=>setsemester(e.target.value)} value={semester} placeholder='Enter Semester'/>
      {errors.semester  && <span>{errors.semester}</span>}
      <input className='inputBox' type="text" onChange={(e)=>setsubject(e.target.value)} value={subject} placeholder='Enter Subject'/>
      {errors.subject && <span>{errors.subject}</span>}
      <input className='inputBox' type="text" onChange={(e)=>setmobilenumber(e.target.value)} value={mobilenumber} placeholder='Enter Mobile Number'/>
      {errors.mobilenumber && <span>{errors.mobilenumber}</span>}
      <input className='inputBox' type="text" onChange={(e)=>setaddress(e.target.value)} value={address} placeholder='Enter Address'/>
      {errors.address && <span>{errors.address}</span>}
      <input className='inputBox' type="text" onChange={(e)=>setstatus(e.target.value)} value={status} placeholder='Enter Status'/>
      {errors.status && <span>{errors.status}</span>}
      <button className='appbutton' onClick={(e)=>insertdata(e)} type='button'>Add</button>
    </div>
  )
}
