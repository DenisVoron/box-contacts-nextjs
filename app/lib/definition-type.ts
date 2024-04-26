export type objLink = {
  name: string;
  href: string;
};

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: [Object];
};

type companyData = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface IUserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: companyData;
}

export type PostsData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type socialData = {
  id: number;
  icon: string;
  path: string;
};
