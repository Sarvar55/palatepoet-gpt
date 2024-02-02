"use client";
import React, { useLayoutEffect } from "react";
import { Form, Input } from "antd";
import { useTranslations } from "next-intl";
import { Icons } from "@/components/icons";
import PrivateButton from "@/components/ui/private-button";
import { UserPayload } from "@/types/payloads";
import { changeUserCredentials } from "@/services/user-service";
import { signIn, useSession } from "next-auth/react";

export default function page() {
  const t = useTranslations("page.settings.profilepage");
  const { data: session } = useSession();

  const onFinish = (values: any) => {
    const { email, password, username } = values;
    console.log("onFinish");

    if (values != null || values != undefined) {
      const payload: UserPayload = { email, username, password };
      if (session?.user) changeUserCredentials(session?.user.userId, payload);
    }
  };

  return (
    <div className="flex justify-start items-start mt-16 ml-12">
      <div className="flex flex-col w-full space-y-7">
        <div className="top flex flex-col">
          <h1 className="text-base font-roboto font-semibold leading-7 dark:text-white text-black-primary">
            {t("mydetails")}
          </h1>
          <p className="text-base font-roboto  dark:text-white text-black-primary">
            {t("mngProfile")}
          </p>
        </div>
        <div className="w-[90%] h-auto  border border-slate-500 rounded-lg">
          <div className="flex flex-col space-y-6 py-7 px-5">
            <Form
              name="change-credentials"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name={"username"}
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("name")}
                  </label>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<Icons.user size="15" />}
                  type="text"
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("email")}
                  </label>
                }
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input prefix={<Icons.mail size="15" />} placeholder="email" />
              </Form.Item>
              <Form.Item
                name="password"
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("password")}
                  </label>
                }
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<Icons.lock size={"15"} />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <PrivateButton className="p-2 bg-green-secondary rounded-md  transition-all duration-400">
                  {t("btnupdate")}
                </PrivateButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
