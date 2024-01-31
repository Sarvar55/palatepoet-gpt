import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LeftNavbar from "./left-navbar";
import RightNavbar from "./right-navbar";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="w-full h-[80px] px-5 flex items-center justify-between">
      <LeftNavbar />
      <RightNavbar />
    </header>
  );
}
