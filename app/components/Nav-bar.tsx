"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from "../lib/nav-links";
import { objLink } from "../lib/definition-type";

const NavBar: FC = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setActive(false);
  }, [pathName]);

  return (
    <>
      <div className="text-logo text-3xl font-semibold">
        <Link href="/">
          <Image
            src="/new-book.png"
            width={50}
            height={50}
            alt="logo-img"
            priority
          />
        </Link>
      </div>
      <div
        aria-label="mobile menu"
        className="absolute top-9 right-3 sm:hidden"
        onClick={() => setActive(!active)}
      >
        <span
          className={clsx(
            "before:absolute before:w-8 before:h-1 before:bg-slate-300 before:rounded-md before:transition-all before:translate-y-[-10px]",
            {
              "before:rotate-45 before:translate-y-[10px]": active,
            }
          )}
        ></span>
        <span
          className={clsx(
            "after:absolute after:w-8 after:h-1 after:bg-slate-300 after:rounded-md after:transition-all after:translate-y-[10px]",
            { "after:rotate-[-45deg] after:translate-y-[10px]": active }
          )}
        ></span>
        <div
          className={clsx(
            "w-8 h-1 bg-slate-300 rounded-md shadow-md transition-all",
            {
              "w-8 h-1 rounded-md bg-transparent translate-x-[-50px] transition-all":
                active,
            }
          )}
        ></div>
      </div>
      <nav
        className={clsx("ml-auto sm:hidden fixed top-24 right-0", {
          "translate-x-[100px] transition-opacity": !active,
        })}
      >
        <ul className="h-auto bg-purple-500 rounded">
          {links.map((link: objLink) => (
            <li key={link.name} className="">
              <Link
                href={link.href}
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-Indigo-400 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  { "bg-sky-100 text-blue-600": pathName === link.href }
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="ml-auto hidden sm:block">
        <ul className="flex space-x-4">
          {links.map((link: objLink) => (
            <li key={link.name} className="">
              <Link
                href={link.href}
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-Indigo-400 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  { "bg-sky-100 text-blue-600": pathName === link.href }
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
