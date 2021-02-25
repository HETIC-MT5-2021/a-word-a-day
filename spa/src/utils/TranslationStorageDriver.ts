import Translation from '../domain/Translation';
import { LocalStorageDriver } from './LocalStorageDriver';
import dayjs from "dayjs";

export class TranslationStorageDriver extends LocalStorageDriver<Translation[]> {
  constructor() {
    super("translations")
  }

  getParsedItem(): Translation[] {
    const translations = super.getParsedItem() || []

    return translations.map(translation => {
      const creation_date = dayjs(translation.creation_date)

      return { ...translation, creation_date }
    })
  }
}
