import { FC } from "react";
import SocialsList from "../components/Socials";
// import { fetchSocials } from "../fetch/fetch-api";

const Home: FC = async (): Promise<JSX.Element> => {
  // const data = await fetchSocials();
  const data = [
    {
      id: 1,
      icon: "youtube",
      path: "https://youtube.com/",
    },
    {
      id: 2,
      icon: "instagram",
      path: "https://instagram.com/",
    },
  ];

  return (
    <div className="animation h-[35rem]">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="sm:w-96 mx-auto">
        <h2 className="text-center mb-4 pt-10 sm:text-2xl">Homme!!</h2>
        <SocialsList socials={data} />
      </div>
    </div>
  );
};

export default Home;
