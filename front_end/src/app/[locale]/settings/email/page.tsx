"use client";
import { Icons } from "@/components/icons";
import PrivateButton from "@/components/ui/private-button";
import { changeUserEmail } from "@/services/user-service";
import { UserPayload } from "@/types/payloads";
import { Form, Input } from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const t = useTranslations("page.settings.emailpage");
  const { data: session } = useSession();

  const onFinish = (values: any) => {
    const { email, password, username } = values;

    if (values != null || values != undefined) {
      const payload: UserPayload = { email, username, password };
      const userId = session?.user.userId;
      if (userId != null || userId != undefined)
        changeUserEmail(userId, payload);
    }
  };

  return (
    <div className="flex justify-start items-start mt-16 ml-12">
      <div className="flex flex-col w-full space-y-7">
        <div className="top flex flex-col">
          <h1 className="text-base font-roboto font-semibold leading-7 dark:text-white text-black-primary">
            Email
          </h1>
          <p className="text-base font-roboto  dark:text-white text-black-primary">
            {t("descupdateemail")}
          </p>
        </div>
        <div className="w-[90%] h-auto  border border-slate-500 rounded-lg">
          <div className="flex flex-col space-y-6 py-7 px-5">
            <Form
              layout="vertical"
              name="change-credentials"
              className="dark:text-white"
              onFinish={onFinish}
            >
              <Form.Item
                name={"newEmail"}
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("descupdateemail")}
                  </label>
                }
                className="dark:text-white"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<Icons.mail size="15" />}
                  type="email"
                  placeholder="Your new email"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("repeatemail")}
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
                <Input
                  prefix={<Icons.mail size="15" />}
                  placeholder="repeat email"
                  type="email"
                />
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
                  {t("btnupdateemail")}
                </PrivateButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
