"use client"
import React from "react"
import Link from "next/link"
import axios from "axios"

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })

  const onLogin = async () => {
    // TODO: call login API
    // await axios.post('/api/users/login', user)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Welcome Back
        </h1>
        <p className="mb-6 text-center text-sm text-gray-500">
          Login to your account
        </p>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={onLogin}
            className="mt-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-black hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
