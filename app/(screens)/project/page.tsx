import { Metadata } from "next";
import React from "react";
import CustomTemplate from "@/components/custom/custom-template";

export const metadata: Metadata = {
  title: "Mes projets",
};

export default function Project() {
  return (
    <CustomTemplate
      title={"Project"}
      substitle={"Varied experiences in personal projects."}
    />
  );
}
