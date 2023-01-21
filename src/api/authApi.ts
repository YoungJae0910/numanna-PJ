import axios from "axios";
import { getUsersUrl } from "./apiSettings";

export type PersonalityType = {
  extroversionScore: number;
  smokingScore: number;
  alcoholScore: number;
};

export type User = {
  id: string;
  password: string;
  name: string;
  nickName: string;
  email: string;
  age: number;
  personalityType: PersonalityType;
};

const NULL_USER: User = {
  id: "null",
  password: "null",
  name: "null",
  nickName: "null",
  email: "null",
  age: 0,
  personalityType: {
    extroversionScore: 0,
    smokingScore: 0,
    alcoholScore: 0,
  } as PersonalityType,
} as User;

export const validatePassword = async (id: string, password: string) => {
  const user: User = await getUser(id);
  if (!user) return false;

  const doesPasswordMatch = HashPassword.v1(password) === user.password;
  return doesPasswordMatch || false;
};

export const login = async (id: string, password: string) => {
  const isPasswordValid = await validatePassword(id, password);

  if (!isPasswordValid) {
    return false;
  }

  // Set session

  return true;
};

export const logout = () => {
  // Clear session
};

export const isCurrentSessionValid = async () => {
  // 일단
  return true;
};

export const updateUser = async (id: string, newUser: User) => {
  const res = await axios.put(getUsersUrl() + "/" + id, newUser);
  if (!res) return;

  return res.data;
};

export const addUser = async (newUser: User) => {
  const userToAdd = newUser;
  userToAdd.password = HashPassword.v1(newUser.password);

  const res = await axios.post(getUsersUrl(), userToAdd);
  if (!res) return;

  return res.data;
};

export const deleteUser = async (id: string) => {
  const res = await axios.delete(getUsersUrl() + "/" + id);
  if (!res) return;

  return res.data;
};

export const getUser = async (id: string) => {
  const res = await axios.get(getUsersUrl() + "/" + id);
  if (!res) return NULL_USER;

  const user: User = res.data as User;
  if (!user) return NULL_USER;

  return user;
};

export const getUsers = async () => {
  const res = await axios.get(getUsersUrl());
  if (!res) return [NULL_USER] as User[];

  const users: User[] = res.data as User[];
  if (!users) return [NULL_USER] as User[];

  return users;
};

export class HashPassword {
  static v1(password: string) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      let chr = password?.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }

    return string(hash);
  }
}
