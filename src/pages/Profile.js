import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { TERipple } from "tw-elements-react";
export default function Profile() {
  const [myproducts, setmyproducts] = useState([{}]);
  const navigate=useNavigate();
  useEffect(()=>{
    let data=localStorage.getItem("user");
    console.log(data);
    if(data==null){
    navigate("/");
    }
  });

  useEffect(() => {
    getmyproducts();
  }, []);

  const getmyproducts = async () => {
    let result = await fetch("http://localhost:5000/myproducts", {
      credentials: "include",
    });
    result = await result.json();
    setmyproducts(result);
  };

  const deleteproduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteproduct/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        getmyproducts();
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  return (
    <>
      <div className="mt-28 items-center m-auto lg:w-96 ">
        <h1 className="text-3xl font-extrabold text-center mb-4 text-blue-950">My Notes</h1>
      </div>
      <div className="grid grid-cols-1 mx-6 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-4 lg:px-16">
        {myproducts.length > 0 ? (
          myproducts.map((item, index) => (
            <div key={index} className="col-span-1 my-3">
              <div className="rounded-lg bg-gray-100 text-center shadow-md dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  Semester - {item.semester}
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {item.subject}
                  </h5>
                  <p className="mb-4 text-base text-black dark:text-neutral-200">
                    Status - {item.status}
                  </p>
                  <TERipple>
                    <button
                      type="button"
                      className="inline-block mx-2 text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal shadow-md ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg  focus:ring-0 active:bg-primary-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
                      onClick={() => {
                        deleteproduct(item._id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="inline-block mx-2 text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal shadow-md ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg  focus:ring-0 active:bg-primary-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
                    >
                      <Link to={"/update/" + item._id}>Update</Link>
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
