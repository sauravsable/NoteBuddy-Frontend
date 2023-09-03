import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [semester,setsemester]=useState("");
  const [subject,setsubject]=useState("");
  const [status,setstatus]=useState("");
  const [errors,seterrors]=useState({})
  const navigate=useNavigate();
  
  useEffect(()=>{
    let data=localStorage.getItem("user");
    console.log(data);
    if(data==null){
    navigate("/");
    }
  })

  const validation=(semester,subject,status)=>{
   const error={};

   if(semester===""){
    error.semester="Semester is Required";
   }

   if(subject===""){
    error.subject="Subject is Required";
   }

   if(status===""){
    error.status="Status is Required";
   }
   seterrors(error);
   return Object.keys(error).length === 0
  }

  const insertdata=async(e)=>{
    e.preventDefault();

    if(validation(semester,subject,status)){
      const res= await axios.post("http://localhost:5000/addproduct",{semester,subject,status},{withCredentials:true});
      console.warn(res);
      setsemester("");
      setsubject("");
      setstatus("");
      navigate('/profile');
    }

 
  }

  return (
    <div className='mt-4 mb-6'>
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
            <a href="/">
                <h3 className="text-4xl font-bold text-blue-950">
                    Add Notes
                </h3>
            </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form>
                <div className="mt-4">
                    <label
                        htmlFor="semester"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Semester
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                             type="number"
                             name="semester"
                            className="block w-full mt-1 px-2 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(e)=>setsemester(e.target.value)} value={semester}
                        />
                        {errors.semester  && <span className='text-red-500'>{errors.semester}</span>}
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Subject
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="subject"
                            className="block w-full mt-1 px-2 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(e)=>setsubject(e.target.value)} value={subject}
                        />
                         {errors.subject && <span className='text-red-500'>{errors.subject}</span>}
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Status
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="status"
                            className="block w-full mt-1 px-2 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(e)=>setstatus(e.target.value)} value={status}
                        />
                        {errors.status && <span className='text-red-500'>{errors.status}</span>}
                    </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        onClick={(e)=>insertdata(e)}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
