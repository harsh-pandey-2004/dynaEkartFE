import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    const formData = {
      phoneNumber,
      email,
      password,
      firstName: isRegister ? firstName : undefined, 
    };

    try {
      let response;
      if (isRegister) {
        // Make API call for Registration with proper protocol (http://)
        response = await axios.post("http://localhost:3000/user/register", formData);
      } else {
        // Make API call for Login
        response = await axios.post("http://localhost:3000/user/login", formData);
      }

      if (response.status === 200) {
        console.log("Success", response.data);
      }
    } catch (err) {
      setError("An error occurred. Please try again."); // Handle error
      console.error("Error", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">
          {isRegister ? "Register" : "Sign In"}
        </h2>
        <p className="text-center mb-6">
          {isRegister
            ? "Create your account to continue"
            : "Please sign in to continue"}
        </p>

        <form onSubmit={handleSubmit}>
          {/* First Name (only visible when registering) */}
          {isRegister && (
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          )}

          {/* Phone Number or Email */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          {/* Email (only visible when registering) */}
          {isRegister && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Loading..." : isRegister ? "Register" : "Login"}
          </button>

          {/* Toggle between Login and Register */}
          <p className="text-center mt-2">
            {isRegister ? (
              <span>
                Already have an account?{" "}
                <button
                  onClick={() => setIsRegister(false)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Sign In
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsRegister(true)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Register
                </button>
              </span>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
