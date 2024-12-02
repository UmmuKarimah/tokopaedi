import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import axios from "axios";
import { baseUrl } from "../config";
import Spinner from "../components/Spinner";

export default function Produk() {
  const [isLoading, setIsLoading] = useState(true); // Initialize with loading
  const [dataProduk, setDataProduk] = useState([]); // Start with an empty array

  const loadData = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}products`)
      .then((response) => {
        setDataProduk(response.data); // Set data from API
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching data");
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after the request
      });
  };

  useEffect(() => {
    loadData(); // Fetch data on load
  }, []); // Only run once on mount

  return (
    <>

      <br />
      {isLoading ? <Spinner /> : null} {/* Show spinner while loading */}
      <div className="flex justify-center flex-wrap gap-2 w-full mx-4">
        {dataProduk.length > 0 ? (
          dataProduk.map((product, index) => (
            <Cards
              key={index}
              namaproduk={product.title}
              harga={product.price}
              foto={product.image}
              deskripsi={product.description}
              link={product.id}
            />
          ))
        ) : (
          <p>No products available</p> // Fallback if data is empty
        )}
      </div>
    </>
  );
}
