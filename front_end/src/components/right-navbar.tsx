import React from "react";
import LanguageSelector from "./ui/language-selector";
import AvatarMenu from "./avatar-menu";

export default function RightNavbar() {
  return (
    <nav className="w-[40%] h-full flex items-center justify-end">
      <div className="flex justify-between items-center space-x-6">
        <LanguageSelector />
        <AvatarMenu />
      </div>
    </nav>
  );
}
