import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../constanta/backed";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name || !image) {
      alert("Inputs are empty");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: "token",
    };

    const data = {
      name: name,
      image: image,
    };

    try {
      const response = await axios.post(`${backendUrl}/categories`, data, {
        headers: headers,
      });

      console.log("Response data:", response.data); // Debugging: log response data

      if (response.data) {
        navigate("/"); // Ensure this line is executed
      }
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create Category</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image Address
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Admin;
