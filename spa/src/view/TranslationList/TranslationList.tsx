import React, { useEffect, useState } from "react";
import TranslationItem from "./TranslationItem";
import { fetchTranslations } from "../../data";
import Translation from "../../domain/Translation";

export interface Props {}

export const TranslationList: React.FunctionComponent<Props> = () => {
  const [translations, setTranslations] = useState<Translation[]>([]);

  useEffect(() => {
    const translations = fetchTranslations();

    setTranslations(translations);
  }, []);

  return (
    <ul>
      {translations.map((translation) => (
        <li key={translation.id} className="box">
          <TranslationItem translation={translation} />
        </li>
      ))}
    </ul>
  );
};
