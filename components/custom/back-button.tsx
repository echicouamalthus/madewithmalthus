"use client";

import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Backbutton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex items-center gap-2 ">
      <ArrowCircleLeft weight="fill" size={24} />
      <p className="font-sans font-normal text-lg">Back</p>
    </button>
  );
}
