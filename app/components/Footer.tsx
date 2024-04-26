import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="h-14 w-screen fixed z-10 bottom-0 px-1.5 bg-purpleCustom border-t-indigo-500">
      <p className="w-28 mx-auto mt-3 text-center">Footer!!</p>
    </footer>
  );
};

export default Footer;
