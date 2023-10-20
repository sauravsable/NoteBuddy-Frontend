import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TERipple } from "tw-elements-react";
import { useSelector } from "react-redux";

export default function ProductList() {
  const [products, setproducts] = useState([]);
  const navigate=useNavigate();
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    // if (user && user._id) {
      getproducts();
    // } else {
      // navigate("/");
    // }
  }, [user, navigate]);
  

  const getproducts = async () => {
    try {
      let response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({userId:user._id}),
      });
  
      if (response.status === 200) {
        response = await response.json();
        console.warn(response);
        setproducts(response);
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  const searchhandle = async (e) => {
    const key = e.target.value;
    if (key) {
      try {
        const response = await fetch(`http://localhost:5000/search/${key}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        if (response.status === 200) {
          const data = await response.json();
          setproducts(data);
        } else {
          console.error('Error fetching search results:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      await getproducts();
    }
  };
  

  const senddata = async (email,subject,semester,name) => {
    console.warn(email,subject,semester,name);
    try {
      const response = await fetch('http://localhost:5000/getdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({email,subject,semester,name,userEmail:user.email,userName:user.name,userMobile:user.mobile}),
      });
      navigate("/ConfirmOTP");
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Error sending POST request:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };
  


  return (
    <>
      <div className="mt-16 items-center m-auto lg:w-96 pt-12 h-5/6">
        <h1 className="text-3xl font-extrabold text-center mb-4 text-blue-950">Available Notes</h1>
      <input
        type="text"
        className="w-full  px-4 py-2 rounded-lg border-2 border-cyan-400 bg-gray-100 focus:bg-white dark:bg-neutral-700 dark:focus:bg-neutral-800"
        placeholder="Search Product"
        onChange={searchhandle}
      />
      </div>
      <div className="grid grid-cols-1 mx-6 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-4 lg:px-16">

  {products.length > 0 ? (
    products.map((item, index) => (
      <div key={index} className="col-span-1 my-3">
        <div className="rounded-lg bg-gray-100 text-center shadow-md dark:bg-neutral-700">
          <div className="border-b-2 text-black font-semibold border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            Semester - {item.semester}
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {item.subject}
            </h5>
            <p className="mb-4 text-base  text-black dark:text-neutral-200">
              Status - {item.status}
            </p>
            <TERipple>
              <button
                type="button"
                className="inline-block cursor-pointer text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal shadow-md ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg  focus:ring-0 active:bg-primary-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
                onClick={()=>senddata(item.userEmail,item.subject,item.semester,item.userName)}
              >
                Get In Touch
              </button>
            </TERipple>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h1 className="col-span-1 text-center text-3xl font-extrabold">
      No Result Found!..
    </h1>
  )}
</div>

    </>
  );
}
