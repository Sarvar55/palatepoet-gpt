import { ImageIcons } from "@/constants/data";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src={ImageIcons.logo} alt="resim" width={40} height={40} />
      <p className="text-gray flex justify-center  items-center font-roboto font-bold text-2xl">
        Chef<span className="text-green">GPT</span>
      </p>
    </div>
  );
}
