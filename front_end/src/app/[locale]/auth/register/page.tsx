import RegisterForm from "@/components/form/register-form";
import Navbar from "@/components/navbar";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className=" px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg  md:w-1/3 lg:w-2/4">
          <h3 className="text-2xl font-bold text-center mb-5">Register</h3>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
