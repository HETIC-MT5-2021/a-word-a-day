import React from "react";
import TranslationItem from "./TranslationItem";
import {translations} from "../../date";

export interface Props {
}

export const TranslationList: React.FunctionComponent<Props> = () => (
    <ul>
        {
            translations.map((translation) => (
                <li key={translation.id} className="box">
                    <TranslationItem translation={translation}/>
                </li>
            ))
        }
    </ul>
);
