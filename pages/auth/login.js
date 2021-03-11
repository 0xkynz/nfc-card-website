import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { login } from '../../services/user';
import { setToken } from '../../utils/auth';

// layout for page

import Auth from 'layouts/Auth.js';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  const { handleSubmit, errors, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setSubmitting(true);
      login(values)
        .then(({ data }) => {
          const { token } = data;
          setToken(token);
          window.location.href = '/user/settings';
        })
        .catch(() => {})
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6"></div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={values.password}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  {errors && Object.keys(errors).length > 0 && (
                    <p className="text-red-500 text-xs">
                      {errors[Object.keys(errors)[0]]}
                    </p>
                  )}

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? 'Waiting...' : 'Sign In'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                {/* <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>Forgot password?</small>
                </a> */}
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-gray-300">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
