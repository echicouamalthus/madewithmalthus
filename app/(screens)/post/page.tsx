import { Metadata } from "next";
import React from "react";
import CustomTemplate from "@/components/custom/custom-template";

export const metadata: Metadata = {
  title: "Mes Posts",
};

export default function Post() {
  return (
    <CustomTemplate
      title={"Post"}
      substitle={"Thoughts, ideas, and opinions."}
    />
  );
}
