import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import { baseUrl } from "../config";
import Spinner from "../components/Spinner";

export default function Beranda() {
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
      <div className="min-h-screen bg-gray-50 py-8 ">
        {/* Hero Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
            Selamat Datang di{" "}
            <span className="text-6xl text-green-600">TOKOPAEDI</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-lg mx-auto leading-relaxed">
            Kami menyediakan berbagai macam barang kebutuhan Anda dengan harga
            yang terjangkau dan pelayanan terbaik.
          </p>
        </div>

        {/* Products Section */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="min-w-full sm:w-96 bg-white rounded-xl shadow-xl">
            <div className="relative overflow-hidden">
              {/* Scrolling wrapper */}
              <div className="flex space-x-4 animate-scroll">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
