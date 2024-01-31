import React, { ReactNode } from "react";
import Layout from "@/components/layout";
import SettingSidebar from "./setting-sidebar";

type Params = {
  children: ReactNode;
};

export default function SettingLayout({ children }: Params) {
  return (
    <Layout>
      <div className="w-full flex justify-between">
        <div className="flex justify-start">
          <SettingSidebar />
        </div>
        <div className="flex-1 w-full">{children}</div>
      </div>
    </Layout>
  );
}
