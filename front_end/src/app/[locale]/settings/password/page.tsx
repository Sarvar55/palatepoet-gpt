"use client";
import { Icons } from "@/components/icons";
import PrivateButton from "@/components/ui/private-button";
import { PasswordChangeLayload } from "@/types/payloads";
import { Form, Input } from "antd";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Page() {
  const t = useTranslations("page.settings.passwordpage");
  const { data: session } = useSession();

  const onFinish = (values: any) => {
    if (values != null || values != undefined) {
      const { currentPassword, newPassword } = values;
      const payload: PasswordChangeLayload = { currentPassword, newPassword };
      const email = session?.user.email;
      
    }
  };

  return (
    <div className="flex justify-start items-start mt-16 ml-12">
      <div className="flex flex-col w-full space-y-7">
        <div className="top flex flex-col">
          <h1 className="text-base font-roboto font-semibold leading-7 dark:text-white text-black-primary">
            {t("password")}
          </h1>
          <p className="text-base font-roboto  dark:text-white text-black-primary">
            {t("descupdatepassword")}
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
                name={"currentPassword"}
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("currentpassword")}
                  </label>
                }
                className="dark:text-white"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                  {
                    min: 6,
                    max: 15,
                    message: "Please enter valida password",
                  },
                ]}
              >
                <Input prefix={<Icons.mail size="15" />} type="password" />
              </Form.Item>
              <Form.Item
                name="newPassword"
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("newpassword")}
                  </label>
                }
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your new repeat password!",
                  },
                  {
                    min: 6,
                    max: 15,
                    message: "Please enter valida password",
                  },
                ]}
              >
                <Input prefix={<Icons.mail size="15" />} type="password" />
              </Form.Item>
              <Form.Item
                name="repeatPassword"
                dependencies={["newPassword"]}
                label={
                  <label className="dark:text-white text-black-primary">
                    {t("reptnewPas")}
                  </label>
                }
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!",
                        ),
                      );
                    },
                  }),
                ]}
              >
                <Input prefix={<Icons.lock size={"15"} />} type="password" />
              </Form.Item>
              <Form.Item>
                <PrivateButton className="p-2 bg-green-secondary rounded-md  transition-all duration-400">
                  {t("btnupdtpassword")}
                </PrivateButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
