import React from 'react';

export default function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/dashboard');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* app title */}
        <div className="flex flex-row space-x-4 justify-center items-center">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h1 className="text-center text-3xl font-extrabold text-indigo-600">
            My App
          </h1>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0 divide-gray-300 gap-8"> </div>*/}
        {/* sign in form */}
        <div className="bg-white rounded-md shadow">
          <h2 className="text-center text-xl text-gray-900 pt-6">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 text-left p-8">
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                id="email-address"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="john@example.com"
                autoComplete="email"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Password</span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Password"
              />
            </label>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#forgot-password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
              <input type="hidden" name="remember" value="true" />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white rounded-md shadow">
          <h2 className="text-center text-xl text-gray-900 pt-6">
            Don't have an account?
          </h2>
          <div className="p-8">
            <button className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Create a new account!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
