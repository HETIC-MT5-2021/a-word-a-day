import React from "react";
import TranslationItem from "../TranslationItem";
import Translation from "../../domain/Translation";
import dayjs from "dayjs";

export interface Props {}

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

export const TranslationList: React.FunctionComponent<Props> = () => (
    <ul>
        {
            translations.map((translation) => (
                <li key={translation.creation_date.toString()} className="box">
                    <TranslationItem translation={translation} />
                </li>
            ))
        }
    </ul>
);