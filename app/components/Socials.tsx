import { FC } from "react";
import Script from "next/script";
import type { socialData } from "../lib/definition-type";

type socialProps = {
  socials: socialData[];
};

const SocialsList: FC<socialProps> = ({ socials }): JSX.Element => {
  return (
    <>
      <Script src="https://kit.fontawesome.com/5226c29d90.js" />
      <ul className="flex justify-center m-0 p-0">
        {socials &&
          socials.map(({ id, icon, path }: socialData) => (
            <li key={id} className="my-0 mx-2.5">
              <a href={path} target="_blank" rel="noopener noreferer">
                <i
                  className={`fa-brands fa-${icon} fa-lg`}
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SocialsList;
