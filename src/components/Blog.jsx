import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../network/Blog"; // Import the API call
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const blogs = await fetchBlogs();
      setData(blogs);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center py-6">
          <RotatingLines
            visible={true}
            height="60"
            width="60"
            strokeWidth="5"
            animationDuration="7.00"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <section className="container mx-auto px-16 py-12">
          <h2 className="text-4xl text-center mb-8 font-bold">Our Blog Post</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
            {data?.map((blog) => (
              <div
                key={blog?.id}
                className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl"
              >
                <img
                  src={blog?.blogimage}
                  alt={blog?.title}
                  className="w-full h-60 object-cover duration-500 hover:scale-110"
                />
                <div className="p-6">
                  <p className="text-gray-500 text-sm font-semibold">
                    {blog?.title}
                  </p>
                  <h3 className="text-xl font-bold truncate">
                    <a href={blog?.link}>{blog.header}</a>
                  </h3>
                  <a href={blog?.link}>
                    <button className="text-blue-700 hover:underline">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Blog;
