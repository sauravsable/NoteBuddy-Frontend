import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Profile() {
  const [myproducts, setmyproducts] = useState([{}]);

  useEffect(() => {
    getmyproducts();
  }, []);

  const getmyproducts = async () => {
    let result = await fetch("http://localhost:5000/myproducts",{credentials:'include'});
    result =await result.json();
    setmyproducts(result);
  };
  
  const deleteproduct=async(id)=>{
    const result= await axios.delete(`http://localhost:5000/product/${id}`);
    getmyproducts();
  }
  

  return (
    <div className="productlist">
      <h1>My Items</h1>
      <ul>
          <li>S.No</li>
          <li>Semester</li>
          <li>Subject</li>
          <li>Status</li>
          <li>Activity</li>
        </ul>
      {myproducts.length>0 ? myproducts.map((item,index) => (
        <ul key={index}>
          <li>{index+1}</li>
          <li>{item.semester}</li>
          <li>{item.subject}</li>
          <li>{item.status}</li>
          <li>
            <button onClick={()=>{deleteproduct(item._id)}} >Delete</button>
            <Link to={"/update/"+item._id}>Update</Link>
          </li>
        </ul>
      ))
    :
    <h1>No Result Found!..</h1>
    }
    </div>
  );
}

