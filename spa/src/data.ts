import Translation from "./domain/Translation";
import dayjs from "dayjs";
import { translationsStorage } from ".";

export function fetchTranslations(): Translation[] {
  return translationsStorage.getParsedItem() || []
};
