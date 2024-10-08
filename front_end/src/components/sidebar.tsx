"use client";
import classNames from "classnames";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { LeftCircleOutlined } from "@ant-design/icons";
import { useLocale, useTranslations } from "next-intl";
import { sideBarLinks } from "@/constants/links";
import { ImageIcons } from "@/constants/data";
import { SidebarLink } from "@/types/types";
import LocalizedLink from "./localized-link";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("page.chef");

  const activeMenu = useMemo(
    () => sideBarLinks.find((menu) => menu.href === pathname),
    [pathname],
  );

  const wrapperClasses = classNames(
    " px-4 pt-8 pb-4 dark:bg-[#141414] h-full  flex justify-between flex-col relative",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    },
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      },
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <LocalizedLink href={"/"}>
            <div className="flex items-center pl-1 gap-4">
              <Image src={ImageIcons.logo} alt="resim" width={40} height={40} />
              <p
                className={classNames(
                  "bg-clip-text bg-gradient-to-bl from-green-600 via-cyan-700 to-purple-400 text-transparent text-gray flex justify-center  items-center font-roboto font-bold text-2xl",
                  {
                    hidden: toggleCollapse,
                  },
                )}
              >
                Palate <span className="text-green">Poet</span>
              </p>
            </div>
          </LocalizedLink>
        </div>

        <div className="flex flex-col items-start mt-24">
          {sideBarLinks.map((menu: SidebarLink) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menu.id} className={classes}>
                <LocalizedLink
                  href={`/${menu.href}`}
                  className="flex py-3 px-3 dark:hover:bg-[#102a19] hover:bg-[#ecfdf5] items-center w-full h-full"
                >
                  <div style={{ width: "2.5rem" }}>
                    <Image src={menu.icon} height={23} width={23} alt="resim" />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={classNames(
                        "text-md font-medium text-text-light",
                      )}
                    >
                      {t(menu.id)}
                    </span>
                  )}
                </LocalizedLink>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-full fixed top-[877px]">
        <button
          className="flex items-center space-x-3 w-full justify-center"
          onClick={handleSidebarToggle}
        >
          <LeftCircleOutlined />
          {!toggleCollapse && (
            <span className={classNames("text-sm font-medium text-text-light")}>
              {t("collapseSidebar")}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
