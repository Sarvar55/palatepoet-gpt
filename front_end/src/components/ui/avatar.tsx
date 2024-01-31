"use client";
import React from "react";
import { Icons } from "../icons";

type Props = {
  username: string | null;
  onClick: () => void;
};

export default function Avatar({ username, onClick }: Props) {
  return (
    <div
      onClick={() => onClick()}
      className="cursor-pointer flex justify-between items-center space-x-2"
    >
      <div className="w-10 h-10 rounded-full bg-green-secondary flex justify-center items-center">
        <h1 className="text-xl"> {username.charAt(0).toLowerCase()}</h1>
      </div>
      <span className="dark:text-white text-black-primary">
        <Icons.downArrow />
      </span>
    </div>
  );
}
