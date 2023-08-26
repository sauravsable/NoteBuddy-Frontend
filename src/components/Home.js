import React from 'react'
import throwindustbin from '../Images/throwing notes.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section id="home" className="flex bg-slate-50">
    <div className="flex content-center w-11/12 px-28 py-24 ">
        <img src={throwindustbin} alt=""/>
    </div>

    <div className="main py-32 px-20 content-center">
    <div className="text-5xl font-bold">
     Welcome to NoteBuddy
    </div>
    <p className="py-4 w-3/4">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="buttons my-4">
    <Link to="/signup"><button className="bg-purple-900 px-4 py-2 rounded-2xl text-white hover:bg-white hover:text-black hover:border-violet-900 mr-2 hover:border-2">SignUp</button></Link> 
    <Link to="/login"><button className="bg-purple-900 px-4 py-2 rounded-2xl text-white hover:bg-white hover:text-black hover:border-violet-900 mr-2 hover:border-2">Login</button></Link>     
    </div>
    
</div>
</section>
  )
}
