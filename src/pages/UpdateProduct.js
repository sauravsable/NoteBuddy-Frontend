import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateProduct() {
  const [formData, setFormData] = useState({
    semester: '',
    subject: '',
    status: '',
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    let data=localStorage.getItem("user");
    console.log(data);
    if(data==null){
    navigate("/");
    }
  },[navigate])

  const getproductdetails = async () => {
    try {
      const response = await fetch(
        `https://notebuddy-backend.onrender.com/getproducttoupdate/${params.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // This sends cookies with the request
        }
      );
  
      if (response.status === 200) {
        const data = await response.json();
        const { semester, subject, status } = data;
        setFormData({
          semester,
          subject,
          status,
        });
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  useEffect(() => {
    getproductdetails();
  });

  const updatedata = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        `https://notebuddy-backend.onrender.com/updateproduct/${params.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // This sends cookies with the request
          body: JSON.stringify(formData),
        }
      );
  
      if (response.status === 200) {
        const data = await response.json();
        console.warn(data);
        navigate('/profile');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              Update Notes
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="semester"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Semester
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="number"
                  name="semester"
                  className="block w-full mt-1 px-2 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChange}
                  value={formData.semester}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Subject
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="subject"
                  className="block w-full mt-1 px-2 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChange}
                  value={formData.subject}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Status
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="status"
                  className="block w-full mt-1 px-2 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChange}
                  value={formData.status}
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                onClick={(e) => updatedata(e)}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
