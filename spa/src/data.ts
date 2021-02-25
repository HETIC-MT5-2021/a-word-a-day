import Translation from "./domain/Translation";
import { translationsStorage } from ".";

export function fetchTranslations(): Translation[] {
  return translationsStorage.getParsedItem()
};
