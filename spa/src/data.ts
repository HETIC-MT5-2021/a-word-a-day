import Translation from "./domain/Translation";
import dayjs from "dayjs";

export function fetchTranslations(): Translation[] {
  return JSON.parse(localStorage.getItem('translations') || "[]")
};
