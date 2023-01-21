import axios from "axios";
import { getPersonalitySurveyQuestionsUrl } from "./apiSettings";

export enum PersonalityScoreType {
  Extroversion = "Extroversion",
  Smoking = "Smoking",
  Alcohol = "Alcohol",
}

export type PersonalitySurveyQuestion = {
  id: number;
  question: string;
  trueValue: number;
  falseValue: number;
  scoreType: PersonalityScoreType;
};

export const getPersonalitySurveyQuestions = async () => {
  const res = await axios.get(getPersonalitySurveyQuestionsUrl());
  if (!res) return;

  return res.data as PersonalitySurveyQuestion[];
};

export const getPersonalitySurveyQuestion = async (id: string) => {
  const res = await axios.get(getPersonalitySurveyQuestionsUrl() + "/" + id);
  if (!res) return;

  return res.data as PersonalitySurveyQuestion;
};
