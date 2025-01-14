import React from "react";
import { FaCheck } from "react-icons/fa6";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";

const Cart = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <h1 className="text-3xl font-bold">Shoping Cart</h1>
        <div className="flex flex-col md:flex-row justify-center pt-6 gap-5">
          <div className="md:w-1/2 border-t-2 border-b-2 flex items-center gap-4 p-6">
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co/m6ZN7LX/soundBox.webp"
                alt=""
                className="w-full border-2 border-blue-100 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h1 className="text-md xl:text-lg font-semibold">
                Divoom Tivoo Portable Bluetooth Speaker Smart Clock Alarm Pixel
                Art DIY By App L
              </h1>
              <p className="text-md mt-2 font-semibold">
                <span className="font-normal">Brand: </span> Samsung
              </p>
              <p className="text-md mt-1 font-semibold">
                <span className="font-normal">Category: </span>
                Mobile
              </p>
              <div className="flex my-2 gap-6">
                <p className="font-semibold text-blue-600">$600</p>
                <GrAddCircle className="bg-gray-100 rounded-full size-6" />
                <p className="font-semibold text-lg">1</p>
                <GrSubtractCircle className="bg-gray-100 rounded-full size-6" />
              </div>
              <div className="flex">
                <FaCheck className="text-green-600 mt-1" />
                <p className="text-md">In Stock</p>
              </div>
              <p className="text-md text-green-600 font-medium">
                You are saving $20.00 upon purchase
              </p>
            </div>
          </div>
          <div className="bg-gray-100 md:w-1/2 py-6 px-6 lg:px-20 rounded-xl">
            <h4 className="font-bold text-2xl md:text-3xl">Order Summary :</h4>
            <div className="flex justify-between my-4 border-b-2 pb-2">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-black font-semibold">$600.00</p>
            </div>
            <div className="flex justify-between  my-4 border-b-2 pb-2">
              <p className="text-gray-700">Shipping estimate</p>
              <p className="text-black font-semibold">$25.00</p>
            </div>
            <div className="flex justify-between  my-4 border-b-2 pb-2">
              <p className="text-gray-700">Tax estimate</p>
              <p className="text-black font-semibold">$15.00</p>
            </div>
            <div className="flex justify-between  my-4 border-b-2 pb-2">
              <p className="text-black font-bold">Total Discount</p>
              <p className="text-black font-semibold">$20.00</p>
            </div>
            <div className="flex justify-between  my-4">
              <p className="text-black text-xl font-bold">Order Total</p>
              <p className="text-blue-600 text-xl font-bold"> $620.00</p>
            </div>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
