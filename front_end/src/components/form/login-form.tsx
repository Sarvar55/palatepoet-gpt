"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Icons } from "../icons";
import LocalizedLink from "@/components/localized-link";
import { LoginPayload } from "@/types/types";
import { signInHandler } from "@/utils/auth";

export default function LoginForm() {
  const onFinish = (values: any) => {
    const { email, password } = values;
    const body: LoginPayload = { email, password };
    signInHandler(body);
  };

  return (
    <section className="w-full">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
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
          <Input prefix={<Icons.user size="15" />} placeholder="email" />
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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="text" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <LocalizedLink href="/auth/register">Register now!</LocalizedLink>
        </Form.Item>
      </Form>
    </section>
  );
}
