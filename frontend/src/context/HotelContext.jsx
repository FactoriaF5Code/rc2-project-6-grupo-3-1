/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const HotelContext = createContext();

export default function HotelProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/hotels").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <HotelContext.Provider value={{ data,search,setSearch }}>
      {children}
    </HotelContext.Provider>
  );
}

export const useHotelContext = () => {
  return useContext(HotelContext);
};
