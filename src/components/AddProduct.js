import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    semester: '',
    subject: '',
    status: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data == null) {
      navigate('/');
    }
  }, [navigate]);

  const validation = () => {
    const newErrors = {};

    if (!formData.semester) {
      newErrors.semester = 'Semester is required';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const insertData = async (e) => {
    e.preventDefault();

    if (validation()) {
      try {
        const res = await axios.post(
          'http://localhost:5000/addproduct',
          formData,
          { withCredentials: true }
        );
        console.warn(res);

        setFormData({
          semester: '',
          subject: '',
          status: '',
        });

        navigate('/profile');
      } catch (error) {
        console.error('Error:', error);
      }
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
    <div className="mt-4 mb-6">
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-blue-950">Add Notes</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div className="mt-4">
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
                {errors.semester && (
                  <span className="text-red-500">{errors.semester}</span>
                )}
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
                {errors.subject && (
                  <span className="text-red-500">{errors.subject}</span>
                )}
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
                {errors.status && (
                  <span className="text-red-500">{errors.status}</span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                onClick={insertData}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
