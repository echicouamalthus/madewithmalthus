"use client";

import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Briefcase,
  Notepad,
  EnvelopeSimple,
  Wrench,
} from "@phosphor-icons/react";
import Link from "next/link";

const LINKS = [
  {
    label: "Project",
    href: "/project",
    icon: Briefcase,
  },
  {
    label: "Post",
    href: "/post",
    icon: Notepad,
  },
  {
    label: "Stack",
    href: "/stack",
    icon: Wrench,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: EnvelopeSimple,
  },
];

export default function SideBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-full flex flex-col items-center md:gap-8 py-4 md:px-2 outline outline-1 gap-4">
      <button
        className="outline outline-1 md:p-3 p-2 rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Moon size={18} weight="fill" />
        ) : (
          <Sun size={18} weight="fill" />
        )}
      </button>

      <div className="flex flex-col relative h-screen">
        <div className="flex flex-col md:space-y-12 space-y-5">
          {LINKS.map((e) => {
            const LinkIcon = e.icon;
            return (
              <Link
                key={e.label}
                href={e.href}
                className="flex flex-col items-center"
              >
                {/* Conteneur pour le label tourné */}
                <div className="hidden md:block w-18">
                  <h1 className="text-xl transform rotate-90 text-center">
                    {e.label}
                  </h1>
                </div>

                {/* Icône visible sur les petits écrans */}
                <LinkIcon className="block md:hidden" size={20} weight="fill" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
