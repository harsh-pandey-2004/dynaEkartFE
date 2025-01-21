import { React, useState, useEffect } from "react";
import { FaRegCalendarAlt, FaGripfire } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { fetchBlogURL } from "../network/SingleBlog";

const SingleBlog = () => {
  const { id } = useParams();
  const { blog, setBlog } = useState(null);
  const { loading, setLoading } = useState(false);
  const { error, setError } = useState(null);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetchBlogURL(id);
      setBlog(response);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
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
        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-full bg-white border shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row hover:scale-105 duration-500">
            <div className="w-full md:w-1/2 flex justify-center p-4">
              <img src={blog?.blogimage} alt={blog?.name} />
            </div>
            <div className="py-6 px-6 w-full md:w-1/2 hover:shadow-xl transition-all duration-300 ease-in-out">
              <h1 className="font-extrabold text-3xl mb-4 transition-colors duration-200 ease-in">
                {blog?.header}
              </h1>
              <div className="flex items-center space-x-3 mb-3">
                <FaRegCalendarAlt className="text-blue-600" />
                <p className="text-lg text-gray-500">Date : Jan-01, 2025</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <LuNotebookPen className="text-green-600" />
                <p className="text-lg">Author : {blog?.author}</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <BiCategory className="text-yellow-600" />
                <p className="text-lg">Category : {blog?.title}</p>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <FaGripfire className="text-red-600" />
                <p className="text-lg">Featured : {blog?.feature}</p>
              </div>
            </div>
          </div>
          <div className="text-justify p-2 mt-6 text-lg">
            <span className="font-bold text-xl"> Description :</span>
            {blog?.content}
          </div>
        </section>
      )}
    </>
  );
};

export default SingleBlog;
