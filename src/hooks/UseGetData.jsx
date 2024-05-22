import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../constanta/backed";

export function useGetData (path) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(`${backendUrl}/${path}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log("Failed to get categories", error);
      }
    }
    getCategories();
  }, [path]);
  return data;
}