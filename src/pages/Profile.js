import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TERipple } from "tw-elements-react";
import { useSelector } from "react-redux";

export default function Profile() {
  const [myproducts, setmyproducts] = useState([{}]);
  const [myrequests, setmyrequests] = useState([{}]);
  const [requests, setrequests] = useState([{}]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    if (user && user._id) {
      getmyproducts();
      getmyrequests();
      getrequests();
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  const getmyproducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/myproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId: user._id }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setmyproducts(data);
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteproduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        getmyproducts();
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const getmyrequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/myrequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userEmail: user.email }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setmyrequests(data);
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getrequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ requestUserEmail: user.email }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setrequests(data);
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  function getStatusColorClass(status) {
    switch (status) {
      case "Pending":
        return "bg-yellow-400 text-black"; // Change to your desired color
      case "Accepted":
        return "bg-green-400 text-white"; // Change to your desired color
      case "Declined":
        return "bg-red-400 text-white"; // Change to your desired color
      default:
        return "bg-blue-600 text-white"; // Default color if status doesn't match
    }
  }
  
  const handleConnect = async () => {
    try {
      const whatsappLink = `https://wa.me/${7248132013}`;
      window.open(whatsappLink, '_blank');
    } catch (error) {
      console.error('Error updating the request:', error);
    }
  };

  const handleAccept= async(request)=>{
    try {
      console.warn(request);
      const response = await fetch("http://localhost:5000/changeStatusAccepted", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(request),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
          alert(data)
          getrequests();
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  const handleDecline= async(request)=>{
    try {
      console.warn(request);
      const response = await fetch("http://localhost:5000/changeStatusDecline", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(request),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
          alert(data);
          getrequests();
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <>
      <div className="mt-36 mx-5 md:mx-40">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          My Requests
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-collapse">
            <thead>
              <tr>
                <th className="w-1/6 px-4 py-2 border">S.No.</th>
                <th className="w-1/6 px-4 py-2 border">Requested To</th>
                <th className="w-1/6 px-4 py-2 border">Email Address</th>
                <th className="w-1/6 px-4 py-2 border">Semester</th>
                <th className="w-1/6 px-4 py-2 border">Subject</th>
                <th className="w-1/6 px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {myrequests.map((request, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border text-center">
                    {request.requestUsername}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {request.requestUserEmail}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {request.semester}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {request.subject}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <button className={`mx-2 px-2 py-2 my-2 bg-blue-600 rounded-md  ${getStatusColorClass(request.status)}`}>
                      {request.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-36 mx-5 md:mx-40">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Requests For Me
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-collapse">
            <thead>
              <tr>
                <th className="w-1/6 px-4 py-2 border">S.No.</th>
                <th className="w-1/6 px-4 py-2 border">Requested By</th>
                <th className="w-1/6 px-4 py-2 border">Email Address</th>
                <th className="w-1/6 px-4 py-2 border">Semester</th>
                <th className="w-1/6 px-4 py-2 border">Subject</th>
                <th className="w-1/6 px-4 py-2 border">Current Status</th>
                <th className="w-1/6 px-4 py-2 border">Activity</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border text-center">
                    {request.userName}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {request.userEmail}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {request.semester}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {request.subject}
                  </td>
                  <td className="px-4 py-2 border text-center">
                  <div className="flex justify-center items-center">
                      <button className={`mx-2 px-2 py-2 my-2 bg-blue-600 rounded-md  ${getStatusColorClass(request.status)}`}>
                        {request.status}
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <div className="flex justify-center items-center">
                      <button className="mx-2 px-2 py-2 my-2 bg-blue-600 rounded-md text-white"
                      onClick={() => handleAccept(request)}>
                        Accept
                      </button>
                      <button className="mx-2 px-2 py-2 my-2 bg-red-600 text-white rounded-md" onClick={() => handleDecline(request)}>
                        Decline
                      </button>
                      <button className="mx-2 px-2 py-2 my-2 bg-blue-600 text-white rounded-md"  onClick={handleConnect}>
                        Connect
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-28 items-center m-auto lg:w-96 ">
        <h1 className="text-3xl font-extrabold text-center mb-4">My Notes</h1>
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
