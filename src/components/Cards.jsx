import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Cards({ namaproduk, harga, foto, deskripsi, link }) {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative p-2.5 h-72 overflow-hidden rounded-xl bg-clip-border">
        {" "}
        {/* Set a fixed height here */}
        <Link to={`/detailProduk/${link}`}>
          <img
            src={foto}
            alt="card-image"
            className="w-full h-full object-contain rounded-md"
          />
        </Link>
      </div>

      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 font-semibold text-lg sm:text-xl md:text-2xl truncate">
            <Link to={`/detailProduk/${link}`}>{namaproduk}</Link>
          </p>
          <p className="text-cyan-600 text-xl font-semibold">${harga}</p>
        </div>

        <p className="text-slate-600 leading-normal font-light line-clamp-2">
          {deskripsi}
        </p>

        {/* Button Section */}
        <div className="mt-auto flex justify-center items-center">
          <Link className="min-w-full" to={`/detailProduk/${link}`}>
            <Button
              fullWidth
              className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Detail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
