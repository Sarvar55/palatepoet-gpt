"use client";
import {
  ImageIcons,
  chefModes,
  ingredients,
  kitchenItems,
  mealTimes,
} from "@/constants/data";
import { generatePrompt } from "@/libs/generate-prompt";
import { mapToRecipeForm, parseJsonFromMarkdown } from "@/libs/mapper";
import { useRouter } from "@/navigation";
import { RecipeForm } from "@/types/types";
import { authenticateUser, useAuthenticateUser } from "@/utils/auth";
import { UseCompletionHelpers, useCompletion } from "ai/react";
import { Button, Checkbox, Form, Select, Slider, Space, Spin } from "antd";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";

type Props = {
  order: number;
};

interface RecipeFormParams {
  isLoading: boolean;
  onFinish: (values: any) => void;
  setIsClick: Dispatch<SetStateAction<boolean>>;
}

export default function RecipeForm({
  isLoading,
  onFinish,
  setIsClick,
}: RecipeFormParams) {
  const authenticateUser = useAuthenticateUser();
  const [minute, setMinute] = useState<number>(0);
  const t = useTranslations("page.chef");
  const { data } = useSession();

  const handleChangeMinute = (number: number) => {
    setMinute(number);
  };

  const handleSubmit = () => {
    setIsClick(true);
    authenticateUser();
  };

  return (
    <Form className="w-full" name="chef-form" onFinish={onFinish}>
      <div className="content w-full flex flex-col justify-between items-start space-x-7">
        <Badge order={1} />
        <p className="dark:text-white text-black-primary">{t("oneQuestion")}</p>
        <Space
          style={{ width: "100%", marginTop: "10px" }}
          direction="vertical"
        >
          <Form.Item
            name={["recipe", "ingredients"]}
            rules={[
              {
                required: true,
                message: "Please enter your ingredients ",
              },
            ]}
          >
            <Select
              mode="tags"
              allowClear
              style={{ width: "95%" }}
              placeholder="Search or Add ingredient"
              options={ingredients}
            />
          </Form.Item>
        </Space>
      </div>

      <div className="content w-full flex flex-col justify-between items-start space-x-7">
        <Badge order={2} />
        <p className="dark:text-white text-black-primary">{t("twoQuestion")}</p>
        <Space
          style={{ width: "100%", marginTop: "10px" }}
          direction="vertical"
        >
          <Form.Item
            name={["recipe", "meal_time"]}
            rules={[{ required: true, message: "Please enter meal type" }]}
          >
            <Select options={mealTimes} style={{ width: "95%" }} />
          </Form.Item>
        </Space>
      </div>
      <div className="content w-[95%] flex flex-col justify-between items-start space-x-7">
        <Badge order={3} />
        <p className="dark:text-white text-black-primary">
          {t("thirdQuestion")}
        </p>
        <Form.Item className="w-full" name={["recipe", "tools"]}>
          <Checkbox.Group style={{ width: "100%" }}>
            <ul className="grid  grid-cols-2 w-full space-y-3">
              {kitchenItems.map((item) => (
                <li key={item.id} className="flex items-center gap-7">
                  <Checkbox
                    className="dark:text-white text-black-primary flex items-center"
                    value={item.id}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </Checkbox.Group>
        </Form.Item>
      </div>
      <div className="content w-full flex flex-col justify-between items-start space-x-7">
        <Badge order={4} />
        <p className="dark:text-white text-black-primary">
          {t("fourQuestion")}
        </p>
        <div className="w-[95%] flex justify-center items-center flex-col">
          <span className="dark:text-white text-black-primary">
            ⏲️ {minute} Minutes
          </span>
          <Form.Item className="w-full" name={["recipe", "cooking_time"]}>
            <Slider className="w-full" step={5} onChange={handleChangeMinute} />
          </Form.Item>
        </div>
      </div>
      <div className="content w-full flex flex-col justify-between items-start space-x-7">
        <Badge order={5} />
        <p className="dark:text-white text-black-primary">
          {t("fiveQuestion")}
        </p>
        <Space
          style={{ width: "100%", marginTop: "10px" }}
          direction="vertical"
        >
          <Form.Item
            name={["recipe", "difficulty"]}
            rules={[{ required: true, message: "Please enter your level" }]}
          >
            <Select options={chefModes} style={{ width: "95%" }} />
          </Form.Item>
        </Space>
      </div>

      <div className="content w-[98%] space-x-7">
        <Form.Item>
          <button
            onClick={() => handleSubmit()}
            className={classNames(
              "bg-blue-400 w-full h-10 rounded-md flex justify-center items-center",
              {
                ["bg-slate-400"]: !data?.user,
                ["cursor-not-allowed"]: !data?.user,
                ["hover:bg-blue-600"]: data?.user,
              },
            )}
            type="submit"
          >
            {t("addButton")}
            <Image
              className={classNames({
                "animate-bounce": isLoading,
              })}
              src={ImageIcons.cook}
              width={25}
              height={25}
              alt="resim"
            />
            {isLoading && <Spin />}
          </button>
        </Form.Item>
      </div>
    </Form>
  );
}

const Badge = ({ order }: Props) => {
  return (
    <button className="absolute w-5 h-5 flex justify-center items-center bg-green-secondary rounded-full font-semibold font-roboto text-base">
      {order}
    </button>
  );
};
