import React from "react";
import Translation from "../../../domain/Translation";

export const TranslationItem: React.FunctionComponent<{translation : Translation}> = ({translation}) => {
    return <>{ `${translation.en} - ${translation.fr}` }</>
}
