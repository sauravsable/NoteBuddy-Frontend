import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import images from '../Images/images.png'
export default function Navbar() {

  const auth=localStorage.getItem("user");
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div className=" bg-purple-900 text-white flex justify-between">
      {
        auth?
        <>
        <ul className="px-5 flex space-x-4 justify-start" >
        <li className="py-2"><img src={images} alt="logoimg" className="h-10 rounded-xl"/></li>
        <li className="py-4"><strong>NoteBuddy</strong> </li>
        </ul>

        <ul className="px-5 py-4 flex space-x-10 justify-end" >
            <li className="mx-4 cursor-pointer"><Link to="/">Available</Link></li>
            <li className="mx-4 cursor-pointer"><Link to="/add">Add </Link></li>
            <li className="mx-4 cursor-pointer"><Link to="/profile">Profile</Link></li>
            <li className="mx-4 cursor-pointer"><Link onClick={logout} to="/signup">Logout({auth})</Link></li>
        </ul>
        </>
        :
        <>
         <ul className="px-5 flex space-x-4 justify-start" >
        <li className="py-2"><img src={images} alt="logoimg" className="h-10 rounded-xl"/></li>
        <li className="py-4"><strong>NoteBuddy</strong> </li>
        </ul>
       
        <ul className="px-5 py-4 flex space-x-10 justify-end" >
            <li className="mx-4 cursor-pointer"> <a href="#home">Home</a> </li>
            <li className="mx-4 cursor-pointer">About</li>
            <li className="mx-4 cursor-pointer">Services</li>
            <li className="mx-4 cursor-pointer">Contact</li>
        </ul>
        </>
      }
    </div>
  )
}
