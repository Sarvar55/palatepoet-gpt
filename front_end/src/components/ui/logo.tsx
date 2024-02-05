import { ImageIcons } from "@/constants/data";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center mt-2">
      <Image src={ImageIcons.logo} alt="resim" width={40} height={40} />
      <p className="bg-clip-text bg-gradient-to-bl from-green-600 via-cyan-700 to-purple-400 text-transparent text-gray flex justify-center  items-center font-roboto font-bold text-2xl">
        Palate <span className="text-green px-1">Poet</span>
      </p>
    </div>
  );
}
