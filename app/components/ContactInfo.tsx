import { FC } from "react";
import { IUserData } from "@/app/lib/definition-type";

type userDataProps = {
  contact: IUserData;
};

const ContactInfo: FC<userDataProps> = ({ contact }): JSX.Element => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  return (
    <div className="max-w-sm mx-auto mt-7">
      <h3 className="mb-4 text-3xl">{name}</h3>
      <div className="mb-3.5 text-xl">Email: {email}</div>
      <div className="text-xl">
        Address: {`${city}, ${street}, ${suite}, ${zipcode}`}
      </div>
    </div>
  );
};

export default ContactInfo;
