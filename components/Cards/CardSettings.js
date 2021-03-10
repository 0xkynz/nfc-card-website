import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import 'react-toastify/dist/ReactToastify.css';

import * as userService from '../../services/user';

const settingSchema = Yup.object().shape({
  aboutMe: Yup.string().max(10000, 'Card ID must be at most 10000 characters'),
});

export default function CardSettings() {
  const initialValues = {
    displayName: '',
    email: '',
    aboutMe: '',
    tiktok: '',
    facebook: '',
    twitter: '',
  };
  const [user, setUser] = useState(initialValues);

  useEffect(() => {
    // get user and set form fields
    userService
      .get()
      .then(({ data }) => {
        const { user } = data;
        setUser(user);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const onSubmit = (values) => {
    userService
      .update(values)
      .then(() => {
        alert('Update successfully');
      })
      .catch((err) => console.log(err.message));
  };

  const { username } = user;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">{username}</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <Formik
            enableReinitialize={true}
            initialValues={user}
            onSubmit={onSubmit}
            validationSchema={settingSchema}
          >
            {() => {
              return (
                <Form>
                  <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="displayName"
                        >
                          Display Name
                        </label>
                        <Field
                          type="text"
                          id="displayName"
                          name="displayName"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          defaultValue="Lucky"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-gray-400" />
                  <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    About Me
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="aboutMe"
                        >
                          About me
                        </label>
                        <Field
                          component="textarea"
                          type="text"
                          id="aboutMe"
                          name="aboutMe"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          rows="4"
                          defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                      and Open Source."
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-gray-400" />
                  <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    Linked to social platform
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="facebook"
                        >
                          Facebook
                        </label>
                        <Field
                          id="facebook"
                          name="facebook"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="instagram"
                        >
                          Instagram
                        </label>
                        <Field
                          type="url"
                          id="instagram"
                          name="instagram"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="tiktok"
                        >
                          Tiktok
                        </label>
                        <Field
                          type="url"
                          id="tiktok"
                          name="tiktok"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          defaultValue="https://www.tiktok.com/en"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="twitter"
                        >
                          Twitter
                        </label>
                        <Field
                          type="url"
                          id="twitter"
                          name="twitter"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="flex">
                    <div className="m-auto">
                      <button
                        className="bg-gray-800 active:bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
