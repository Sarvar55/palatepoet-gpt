"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { Icons } from "../icons";
import LocalizedLink from "@/components/localized-link";
import { RegisterPayload } from "@/types/payloads";
import { register } from "@/services/user-service";
import { useCustomRouter } from "@/utils/auth";

export default function RegisterForm() {
  const pushTo = useCustomRouter();

  const onFinish = async (values: any) => {
    const { email, username, password } = values;
    const body: RegisterPayload = { email, password, username };
    await register(body);
    pushTo("/auth/login");
  };

  return (
    <section className="w-full flex flex-col justify-start">
      <Form name="register" className="register-form" onFinish={onFinish}>
        <Form.Item
          name={"username"}
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
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<Icons.lock size={"15"} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="text"
            htmlType="submit"
            className="register-form-button"
          >
            Sign Up
          </Button>
          Or <LocalizedLink href="/auth/login">Login Now!</LocalizedLink>
        </Form.Item>
      </Form>
    </section>
  );
}
