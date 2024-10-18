import { Metadata } from "next";
import React from "react";
import CustomTemplate from "@/components/custom/custom-template";

export const metadata: Metadata = {
  title: "Mes Technos",
};

export default function Stack() {
  return (
    <CustomTemplate
      title={"Stack"}
      substitle={"Tools and technologies I use."}
    />
  );
}
