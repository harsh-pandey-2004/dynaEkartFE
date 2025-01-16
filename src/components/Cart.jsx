import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";

const Cart = () => {
  // const [stock, setStock] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1721864429288-f77b22fdc9ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbXN1bmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Samsung S23 ultra modern phone with AI",
      brand: "Samsung",
      category: "Mobile",
      price: 600,
      quantity: 1,
      stock: false,
      discount: 20,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1608488458196-61cd3a720de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEpCTCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
      title: "JBL Speaker",
      brand: "JBL",
      category: "Speaker",
      price: 120,
      quantity: 1,
      stock: true,
      discount: 10,
    },
  ]);

  // const stockView = () => {
  //   products.stock
  //     ? setStock(<FaCheck className="text-green-600" />)
  //     : setStock(<RxCross2 className="text-red-600" />);
  // };

  const increaseQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const shippingEstimate = 25.0;
  const taxEstimate = 15.0;
  const discountTotal = products.reduce(
    (total, product) => total + product.discount,
    0
  );

  const orderTotal =
    totalPrice + shippingEstimate + taxEstimate - discountTotal;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row justify-center pt-6 gap-5">
        <div className="md:w-2/3">
          {products.map((product) => (
            <div
              key={product.id}
              className="md:w-full border-t-2 border-b-2 flex items-center gap-4 p-6"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full border-2 border-blue-100 rounded-lg"
                />
              </div>
              <div className="w-full">
                <h1 className="text-md xl:text-lg font-semibold">
                  {product.title}
                </h1>
                <p className="text-md mt-2 font-semibold">
                  <span className="font-normal">Brand: </span> {product.brand}
                </p>
                <p className="text-md mt-1 font-semibold">
                  <span className="font-normal">Category: </span>{" "}
                  {product.category}
                </p>
                <div className="flex my-2 gap-6">
                  <p className="font-semibold text-blue-600">
                    ${product.price}
                  </p>
                  <GrAddCircle
                    className="bg-gray-100 rounded-full size-6 cursor-pointer"
                    onClick={() => increaseQuantity(product.id)}
                  />
                  <p className="font-semibold text-lg">{product.quantity}</p>
                  <GrSubtractCircle
                    className="bg-gray-100 rounded-full size-6 cursor-pointer"
                    onClick={() => decreaseQuantity(product.id)}
                  />
                </div>
                <div className="flex">
                  <FaCheck className="text-green-600 mt-1" />
                  <p className="text-md">
                    {product.stock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <p className="text-md text-green-600 font-medium">
                  You are saving ${product.discount}.00 upon purchase
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 md:w-1/3 py-6 px-6 2xl:px-20 rounded-xl">
          <h4 className="font-bold text-2xl md:text-3xl">Order Summary :</h4>
          <div className="flex items-center justify-between my-4 border-b-2 pb-2 gap-2">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-black font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between my-4 border-b-2 pb-2 gap-2">
            <p className="text-gray-700">Shipping estimate</p>
            <p className="text-black font-semibold">
              ${shippingEstimate.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between my-4 border-b-2 pb-2 gap-2">
            <p className="text-gray-700">Tax estimate</p>
            <p className="text-black font-semibold">
              ${taxEstimate.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between my-4 border-b-2 pb-2 gap-2">
            <p className="text-black font-bold">Total Discount</p>
            <p className="text-black font-semibold">
              ${discountTotal.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between my-4 gap-2">
            <p className="text-black text-xl font-bold">Order Total</p>
            <p className="text-blue-600 text-xl font-bold">
              ${orderTotal.toFixed(2)}
            </p>
          </div>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
