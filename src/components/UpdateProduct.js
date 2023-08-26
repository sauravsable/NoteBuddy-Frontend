import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';

export default function UpdateProduct() {
  const [semester,setsemester]=useState("");
  const [subject,setsubject]=useState("");
  const [status,setstatus]=useState("");
  const params=useParams();
//   const [error,seterror]=useState(false);

const navigate=useNavigate();

useEffect(()=>{
    getproductdetails();
});

const getproductdetails=async()=>{
    console.warn(params);
    let result=await axios.get(`http://localhost:5000/product/${params.id}`);
    console.warn(result.data);
    result=result.data;
    setsemester(result.semester);
    setsubject(result.subject);
    setstatus(result.status);
}

  const updatedata=async()=>{
    // console.warn({name,price,category,company})

    const result= await axios.put(`http://localhost:5000/products/${params.id}`,{semester,subject,status});
     navigate('/');
     console.warn(result.data);
  }

  return (
    <div className='add'>
      <h1 className='heading'>Update Product</h1>
    
      <input className='inputBox' type="text" onChange={(e)=>setsemester(e.target.value)} value={semester} placeholder='Enter Semester'/>
    
      <input className='inputBox' type="text" onChange={(e)=>setsubject(e.target.value)} value={subject} placeholder='Enter Subject'/>

      <input className='inputBox' type="text" onChange={(e)=>setstatus(e.target.value)} value={status} placeholder='Enter Status'/>

      <button className='appbutton' onClick={updatedata} type='button'>Update</button>
    </div>
  )
}
