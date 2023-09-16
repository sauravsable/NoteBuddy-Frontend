import React from 'react'
import images from '../Images/images.png'
import { Typography } from "@mui/material";
export default function Footer() {
  return (
<footer className="w-full bg-blue-950 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-blue-950  text-center md:justify-between">
      
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
      <img src={images} alt="logoimg" className="h-10 rounded-xl mx-3"/>NoteBuddy
      </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/about"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              FAQ
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; All Rights Reserved NoteBuddy
      </Typography>
    </footer>
  )
}
