"use client"
import React from "react"
import Link from "next/link"
import axios from "axios"

const Signup = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup = async () => {
    // TODO: call signup API
    // await axios.post('/api/users/signup', user)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h1>
        <p className="mb-6 text-center text-sm text-gray-500">
          Sign up to get started
        </p>

        <div className="flex flex-col gap-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, username: e.target.value })
              }
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            />
          </div>

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
            onClick={onSignup}
            className="mt-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Sign Up
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-black hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
