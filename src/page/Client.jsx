import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../constanta/backed";

const Client = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(`${backendUrl}/categories`);
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log("Failed to get categories", error);
      }
    }
    getCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <img src={category.image} alt={`${category.name}`} />
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Client;
