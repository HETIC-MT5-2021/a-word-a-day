import React, { useEffect, useState } from "react";
import TranslationItem from "./TranslationItem";
import { fetchTranslations } from "../../data";
import Translation from "../../domain/Translation";
import { Link } from "react-router-dom";

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
        <li key={translation.id}>
          <Link to={`/translation/${translation.id}`}>
            <div className="box">
              <TranslationItem translation={translation} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
