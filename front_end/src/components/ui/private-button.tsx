"use client";
import { useRouter } from "@/navigation";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import React, { ReactNode } from "react";

type PrivateButtonProps = {
  children: ReactNode;
  className?: string; // isteğe bağlı olarak özel bir class eklemek için parametre ekledik
  onClick?: () => void;
};
export default function PrivateButton({
  children,
  className,
  onClick,
}: PrivateButtonProps) {
  const { data: session, status } = useSession();
  const locale = useLocale();
  const { push } = useRouter();

  const handleClick = () => {
    if (!session?.user) {
      return push("/auth/login", { locale });
    }

    if (typeof onClick === "function") {
      return onClick();
    }
  };

  const buttonClassName = classNames(className, {
    ["disabled:"]: !session?.user,
    ["bg-slate-400"]: !session?.user,
    ["cursor-not-allowed"]: !session?.user,
    ["hover:bg-blue-600"]: session?.user,
  });

  return (
    <button onClick={handleClick} className={buttonClassName}>
      {children}
    </button>
  );
}
