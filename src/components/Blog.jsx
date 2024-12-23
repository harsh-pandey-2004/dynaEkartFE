import React from "react";

const blogs = [
  {
    image: "blogOne.webp",
    category: "TECHNOLOGY",
    title: "iPhone 15 rear camera design will be available",
  },
  {
    image: "blogTwo.webp",
    category: "SMART THING",
    title: "Setup your surround sound speaker",
  },
  {
    image: "blog-Three.webp",
    category: "LIFE STYLE",
    title: "Hook up a receiver for your home theater",
  },
  {
    image: "blogOne.webp",
    category: "TECHNOLOGY",
    title: "iPhone 15 rear camera design will be available",
  },
  {
    image: "blogTwo.webp",
    category: "SMART THING",
    title: "Setup your surround sound speaker",
  },
  {
    image: "blog-Three.webp",
    category: "LIFE STYLE",
    title: "Hook up a receiver for your home theater",
  },
];

const Blog = () => {
  return (
    <section className="container mx-auto px-16 py-12">
      <h2 className="text-4xl text-center mb-8 font-bold">Our Blog Post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover duration-500 hover:scale-110"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm font-semibold">
                {blog.category}
              </p>
              <h3 className="text-xl font-bold">
                <a href={blog.link}>{blog.title}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
