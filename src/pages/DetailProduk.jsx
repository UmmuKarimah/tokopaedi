import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../config";
import { useParams } from "react-router-dom";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'; // If using solid heart icon


export default function DetailProduk() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [detailProduk, setDetailProduk] = useState({});
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked); // Toggle the "liked" state
  };

  const loadData = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}products/${id}`)
      .then((response) => {
        setDetailProduk(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a Spinner component
  }

  return (
    <>

      <br />
      <section className="py-16 px-8">
        <div className="container mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={detailProduk.image}
              alt={detailProduk.title}
              className="h-[36rem] object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start">
            {/* Title */}
            <Typography variant="h1" className="mb-4 text-left text-3xl">
              {detailProduk.title}
            </Typography>

            {/* Price */}
            <Typography variant="h5" className="text-left text-cyan-600 mb-4">
              ${detailProduk.price}
            </Typography>

            {/* Description */}
            <Typography className="text-left text-base font-normal leading-[27px] text-gray-500 mb-4">
              {detailProduk.description}
            </Typography>

            {/* Rating */}
            <div className="my-8 flex gap-2">
              <div className="flex ">
              <Rating className="flex-row flex" value={Math.round(detailProduk.rating.rate)} readonly unratedColor="amber" ratedColor="amber"/>
              </div>
              <Typography className="text-sm font-bold text-gray-700">
                {detailProduk.rating?.rate || 0} / 5
              </Typography>
            </div>

            {/* Add to Cart and Like Buttons */}
            <div className="mb-4 flex w-full items-center gap-3 md:w-1/2">
              <Button className="text-white bg-sky-600 min-w-64">
                Add to Cart
              </Button>
              <IconButton
                color="gray"
                variant="text"
                className="shrink-0"
                onClick={handleClick}
              > {isLiked ? (
                <HeartSolidIcon className="h-6 w-6 text-red-500" /> // Filled heart when liked
              ) : (
                <HeartIcon className="h-6 w-6 text-gray-500" /> // Outline heart when not liked
              )}
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
