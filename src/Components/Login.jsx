import React, { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isRegister, setIsRegister] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">
          {isRegister ? "Register" : "Sign In"}
        </h2>
        <p className="text-center mb-6">
          {isRegister ? "Create your account to continue" : "Please sign in to continue"}
        </p>

        <form onSubmit={handleSubmit}>
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
          {!isRegister && (
            <div className="mb-4">
              <button className="bg-blue-500 text-white font-semibold p-2 rounded-md">
                Send OTP
              </button>
            </div>
          )}

          {isRegister && (
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
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
          )}

          {!isRegister && (
            <div className="mb-6">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-600"
              >
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isRegister ? "Register" : "Login"}
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
