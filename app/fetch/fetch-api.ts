import { IUserData, PostsData, socialData } from "../lib/definition-type";

export const getUsers = async (): Promise<IUserData[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getContactInfo = async (id: string): Promise<IUserData> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchPosts = async (): Promise<PostsData[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchContactInfo = async (id: string): Promise<PostsData> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchSocials = async (): Promise<socialData[]> => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
