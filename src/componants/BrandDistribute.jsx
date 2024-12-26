import React, { useEffect, useState } from "react";
import axios from "axios";

const BrandsWeDistribute = () => {
  const [brands, setBrands] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/brand/get")
      .then((response) => {
        console.log(response.data.data);
        setBrands(response.data.data);  // Set the brand data
        setLoading(false); 
      })
      .catch((err) => {
        setError("Failed to fetch brands data"); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Brands We Distribute
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {brands.map((brand) => (
          <div key={brand.name} className="flex justify-center items-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-28 object-contain rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsWeDistribute;
