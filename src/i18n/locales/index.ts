import { I18n } from "i18n-js";
import en from "./en";

// Set the key-value pairs for the different languages you want to support.
const translations = {
  en,
};
const i18n = new I18n(translations);

i18n.enableFallback = true;

// i18n.defaultLocale = "es-AR";

export default i18n;
