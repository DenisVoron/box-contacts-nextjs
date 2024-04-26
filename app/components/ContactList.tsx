"use server";

import { FC } from "react";
import Link from "next/link";
import { IUserData } from "../lib/definition-type";
import { getUsers } from "../fetch/fetch-api";

const CotactList: FC = async (): Promise<JSX.Element> => {
  const users = await getUsers();

  return (
    <div>
      <ul className="mb-24 sm:grid sm:gap-x-3 sm:gap-y-3 sm:grid-cols-4">
        {users.map(({ id, name, username, email }: IUserData) => (
          <li key={id} className="mb-3 p-2 border border-violet-800 rounded-lg">
            <div className="">
              <Link href={`/contacts/${id}`}>
                <p className="my-1">
                  <span className="text-violet-800">Name: </span>
                  {name}
                </p>
              </Link>
              <p className="my-1">
                <span className="text-violet-800">Username: </span> ({username})
              </p>
              <p className="">
                <span className="text-violet-800">Email: </span>
                {email}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CotactList;
