import axios from "../utils/axios";
import React, { useEffect } from "react";

const Home = () => {
  const getProduct = async () => {
    try {
      // const { data } = await axios.get("https://fakestoreapi.com/products/1")
      // console.log(data);
      const response = await axios.get("/products");
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [])
  

  return (
    <div>
      Home
      <br />
      <button onClick={getProduct}>Get Product</button>
    </div>
  );
};

export default Home;
