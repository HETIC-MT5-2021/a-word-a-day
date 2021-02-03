import React from "react";
import TranslationList from "../TranslationList/index";
export interface Props {}

export const Application: React.FunctionComponent<Props> = () => (
    <div className="container">
        <TranslationList/>
    </div>
);
