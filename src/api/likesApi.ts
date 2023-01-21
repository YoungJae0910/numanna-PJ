import axios from "axios";
import { getLikesUrl } from "./apiSettings";

type Like = {
  id: number;
  userWhoLikes: string;
  userWhoIsLiked: string;
};

type LikeWithoutId = {
  userWhoLikes: string;
  userWhoIsLiked: string;
};

const getLikes = async () => {
  const res = await axios.get(getLikesUrl());
  if (!res) return;

  return res.data as Like[];
};

export const doesUserLike = async (
  userWhoLikes: string,
  userWhoIsLiked: string
) => {
  const likes: Like[] = (await getLikes()) as Like[];
  const matchingLikes = likes
    .filter((l) => l.userWhoLikes === userWhoLikes)
    .filter((l) => l.userWhoIsLiked === userWhoIsLiked);

  if (matchingLikes.length < 1) return false;

  return true;
};

export const likeUser = async (
  userWhoLikes: string,
  userWhoIsLiked: string
) => {
  if (await doesUserLike(userWhoLikes, userWhoIsLiked)) return;

  const newLike = {
    userWhoLikes: userWhoLikes,
    userWhoIsLiked: userWhoIsLiked,
  } as LikeWithoutId;

  const res = await axios.post(getLikesUrl(), newLike);
  if (!res) return;

  return res;
};

export const unlikeUser = async (
  userWhoLikes: string,
  userWhoIsLiked: string
) => {
  if (!(await doesUserLike(userWhoLikes, userWhoIsLiked))) return;

  const likes = await getLikes();
  if (!likes) return;

  const matchingLikes = likes
    .filter((l) => l.userWhoLikes === userWhoLikes)
    .filter((l) => l.userWhoIsLiked === userWhoIsLiked);
  if (matchingLikes.length < 1) return;

  const res = await axios.delete(
    getLikesUrl() + "/" + String(matchingLikes[0].id)
  );
  if (!res) return;
  return res.data;
};
