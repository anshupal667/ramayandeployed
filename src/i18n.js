import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ['en', 'hi'];

const detectionOptions = {
  order: ['navigator', 'htmlTag', 'path', 'subdomain'],
  checkWhitelist: true
};

i18n
  .use(Backend) // Load translations using http backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: availableLanguages, // Update from whitelist to supportedLngs
    detection: detectionOptions,
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
    backend: {
  loadPath: "https://anshupal667.github.io/ramayandeployed/locales/{{lng}}/translation.json",
}

  });

export default i18n;
