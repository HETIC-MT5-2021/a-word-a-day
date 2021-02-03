import React from "react";
import dayjs from "dayjs"

interface Translation {
  en: string,
  fr: string,
  creation_date: dayjs.Dayjs
}

const translations : Translation[] = [
  {
    en: "cat",
    fr: "chat",
    creation_date: dayjs().subtract(2, "day")
  },
  {
    en: "dog",
    fr: "chien",
    creation_date: dayjs().subtract(3, "day")
  },
  {
    en: "horse",
    fr: "cheval",
    creation_date: dayjs().subtract(1, "day")
  }
];

export const TranslationItem: React.FunctionComponent<{translation : Translation}> = ({translation}) => {
  return <div>{ `${translation.en} - ${translation.fr}` }</div>
}

export interface Props {}

export const Application: React.FunctionComponent<Props> = () => (
  <div>
    {
      translations.map((translation) => (
        <TranslationItem translation={translation} />
      ))
    }
  </div>
);
