"use client";
import Navbar from "@/components/navbar";
import { loginFormSchema } from "@/libs/validation";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { TypeOf } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

type Props = {};

export default function page({}: Props) {
  const [formState, setFormState] = useState<string>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      singInHandle(email, password);
    },
    validationSchema: toFormikValidationSchema(loginFormSchema),
  });

  const singInHandle = (email: string, password: string) => {
    try {
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: true,
      });
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/4">
          <h3 className="text-2xl font-bold text-center">Login</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
