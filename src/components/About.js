import React from 'react'
import aboutimage from "../Images/best-about-us-pages-removebg-preview.png";
export default function About() {
  return (
    <section id="about" className="bg-gray-700 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row">
      <div className="lg:w-2/3 lg:order-last">
        <img src={aboutimage} alt="About Us" className="lg:h-96" />
      </div>
      <div className="lg:w-2/3 lg:pl-8 mt-6 lg:mt-0">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          About Us
        </h2>
        <div className="mt-6 pr-4 text-xl text-white">
          <p>
            Welcome to NoteBuddy, your trusted partner in making knowledge
            accessible through offline notes distribution. We're passionate
            about helping students, professionals, and lifelong learners
            gain access to valuable educational resources anytime, anywhere.
          </p>
          <p className="mt-4">
            At NoteBuddy, our mission is simple: to bridge the gap between
            digital convenience and the tangible benefits of offline
            learning. We understand the importance of having physical notes
            that you can highlight, annotate, and carry with you without
            relying on an internet connection.
          </p>
          {/* <p className="mt-4">
            Remember, your notes are more than just pieces of paper; they're
            a valuable part of your education journey!
          </p> */}
        </div>
      </div>
    </div>
  </section>
  )
}
