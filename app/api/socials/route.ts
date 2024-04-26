import { socials } from "../data/socials";

const GET = () => {
  return Response.json(socials);
};

export { GET };
