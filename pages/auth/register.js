import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { register } from '../../services/user';
import { setToken } from '../../utils/auth';

// layout for page

import Auth from 'layouts/Auth.js';

const registerSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  username: Yup.string()
    .matches(/^[A-Za-z0-9]*$/, 'Please enter valid username')
    .min(4, 'Username must be at least 4 characters')
    .max(40, 'Username must be at most 40 characters')
    .required('Username is required'),
  displayName: Yup.string()
    .min(1, 'Display Name must be at least 1 characters')
    .max(100, 'Display Name must be at most 100 characters')
    .required('Display Name is required'),
  cardID: Yup.string()
    .matches(/^[A-Za-z0-9]*$/, 'Please enter valid Card ID')
    .min(1, 'Card ID must be at least 1 characters')
    .max(20, 'Card ID must be at most 20 characters')
    .required('Card ID is required'),
  password: Yup.string().required('Password is required'),
});

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      cardID: '',
      displayName: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      register(values)
        .then(({ data }) => {
          const { token } = data;
          setToken(token);
          window.location.href = '/user/settings';
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  });

  const { errors } = formik;

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6"></div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="displayName"
                    >
                      Display Name
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      onChange={formik.handleChange}
                      value={formik.values.displayName}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Display name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="cardID"
                    >
                      Card ID
                    </label>
                    <input
                      type="text"
                      name="cardID"
                      onChange={formik.handleChange}
                      value={formik.values.cardID}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Card ID"
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
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
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
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
