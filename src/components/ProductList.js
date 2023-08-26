import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
export default function ProductList() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    let result = await axios.get("http://localhost:5000/products");
    setproducts(result.data);
  };
  

  const searchhandle=async(e)=>{
   const key=e.target.value;
   if(key){
    const result= await axios.get(`http://localhost:5000/search/${key}`);
    if(result){
     setproducts(result.data);
    }
   }
   else{
    getproducts();
   }
  
  }

  return (
    <div className="productlist">
      <h1>Available Items</h1>
      <input type="text" className="search" onChange={searchhandle} placeholder="Search Product"/>
      <ul>
          <li>S.No</li>
          <li>Name</li>
          <li>Rollnumber</li>
          <li>Semester</li>
          <li>Subject</li>
          <li>Mobile Number</li>
          <li>Address</li>
          <li>Status</li>
        </ul>
      {products.length>0 ? products.map((item,index) => (
        <ul>
          <li>{index+1}</li>
          <li>{item.name}</li>
          <li>{item.rollnumber}</li>
          <li>{item.semester}</li>
          <li>{item.subject}</li>
          <li>{item.mobilenumber}</li>
          <li>{item.address}</li>
          <li>{item.status}</li>
        </ul>
      ))
    :
    <h1>No Result Found!..</h1>
    }
    </div>
  );
}
