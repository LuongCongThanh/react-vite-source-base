import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const LANGUAGES = ['en', 'vi']; // Add supported languages here
export const DEFAULT_LANGUAGE = 'en'; // Set the default language

i18n
  .use(Backend) // Load translations over http
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: 'common',
    defaultNS: 'common',
    backend: {
      loadPath: 'src/assets/i18n/{{lng}}/{{ns}}.json' // Path to your translations
    },
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    }
  });

export default i18n;
