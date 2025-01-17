// import React from 'react';

// const TopDeals = () => {
//   const deals = [
//     {
//       id: 1,
//       title: "50% Off on Winter Jackets",
//       description: "Stay warm and stylish this winter with our top-rated jackets.",
//       image: "/images/jacket.jpg",
//       price: "Rs99.99",
//       originalPrice: "Rs199.99",
//     },
//     {
//       id: 2,
//       title: "Buy One Get One Free on Shoes",
//       description: "Get your perfect pair of shoes and enjoy a free one.",
//       image: "/images/shoes.jpg",
//       price: "Rs49.99",
//       originalPrice: "Rs99.99",
//     },
//     {
//       id: 3,
//       title: "Up to 70% Off on Electronics",
//       description: "Grab the latest gadgets at unbeatable prices.",
//       image: "/images/electronics.jpg",
//       price: "Rs149.99",
//       originalPrice: "Rs499.99",
//     },
//     {
//       id: 4,
//       title: "Up to 70% Off on Electronics",
//       description: "Grab the latest gadgets at unbeatable prices.",
//       image: "/images/electronics.jpg",
//       price: "Rs149.99",
//       originalPrice: "Rs499.99",
//     },
//   ];

//   return (
//     <section className="py-16 w-full bg-gray-100">
//       <div className="w-full px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Top Deals</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {deals.map((deal) => (
//             <div key={deal.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="w-full h-48 object-cover rounded-t-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
//               <p className="text-gray-600 mb-4">{deal.description}</p>
//               <div className="flex items-center justify-between">
//                 <span className="text-xl font-semibold text-green-500">{deal.price}</span>
//                 <span className="line-through text-gray-400">{deal.originalPrice}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopDeals;
