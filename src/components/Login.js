import React, { useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
export default function Login() {
  
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("");
  const [errors,seterrors]=useState({});
  const navigate=useNavigate();

  const validation=(email,password)=>{
    const error={};
    if(email===""){
      error.email="Email is Required";
    }
    if(password===""){
      error.password="Password is Required";
    }
    seterrors(error);
    return Object.keys(error).length === 0
  }
  const check=async(e)=>{
    e.preventDefault();

    if(validation(email,password)){
      const res = await fetch("http://localhost:5000/login",{method:'POST',credentials:'include',body:new URLSearchParams({email,password})})
      let resp = await res.json();
      if(resp==="Notfound"){
          alert("please Enter correct Email");
          window.location.reload(); 
      }
      else if(resp==="Notmatch"){
        alert("Please Enter correct Password");
        window.location.reload(); 
      }
      else{
          localStorage.setItem("user",resp.name);
          navigate("/");
      }
    }
   
  }
  return (
<div className='mt-6'>
<div className="flex flex-col items-center min-h-screen pt-6  sm:pt-0 bg-gray-50 ">
    <div>
        <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
                Login
            </h3>
        </a>
    </div>
    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form>
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Email
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="email"
                        name="email"
                        className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={(e)=>setemail(e.target.value)} value={email}
                    />
                    {errors.email && <span className='text-red-500'>{errors.email}</span>}
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Password
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="password"
                        name="password"
                        className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={(e)=>setpassword(e.target.value)} value={password}
                    />
                    {errors.password && <span className='text-red-500'>{errors.password}</span>}
                </div>
            </div>
            <a
                href="#"
                className="text-xs text-purple-600 hover:underline"
            >
                Forget Password?
            </a>
            <div className="flex items-center mt-5">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={(e)=>check(e)}
                >
                    Login
                </button>
            </div>
        </form>
        <div className="mt-4 text-grey-600">
            Don't have an account?{" "}
            <span>
                <Link className="text-purple-600 hover:underline" to="/signup">
                    Register
                </Link>
            </span>
        </div>
    </div>
</div>
</div>
  )
}
