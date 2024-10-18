import React from "react";
import Backbutton from "./back-button";

type CustomTemplateProps = {
  title: string;
  substitle: string;
};

export default function CustomTemplate({
  title,
  substitle,
}: CustomTemplateProps) {
  return (
    <main className="md:h-screen">
      <div className="max-w-3xl mx-auto h-full flex flex-col gap-4 py-8 md:px-0 px-4">
        <Backbutton />
        <div className="grow flex flex-col gap-8">
          <div className="space-y-2">
            <h1 className="md:text-7xl text-3xl font-sans font-bold">
              {title}
            </h1>
            <p className="font-sans text-md">{substitle}</p>
          </div>
          <div className="bg-red-0 grow grid place-content-center gap-6">
            <div className="flex flex-col items-center gap-5">
              <p className="font-sans">Hi! I&apos;m Malthus</p>
              <p className="md:text-6xl text-5xl text-center md:w-96">
                I&apos;m launching my webstie very soon
              </p>
            </div>

            <div className="flex md:flex-row flex-col gap-5">
              <button className="outline outline-1 p-3 md:w-48 w-auto">
                Mon CV
              </button>
              <button
                className="bg-black text-white dark:text-black dark:bg-white p-3 md:w-48 w-auto
            "
              >
                Send me Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
