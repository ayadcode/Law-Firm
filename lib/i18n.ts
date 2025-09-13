import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About us",
        services: "Services",
        team: "Our Team",
        contact: "Contact us",
        search: "Search...",
      },
      hero: { readMore: "Read More" },
      footer: { subscribe: "Subscribe", email: "Email" },
    },
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        services: "الخدمات",
        team: "فريقنا",
        contact: "اتصل بنا",
        search: "...ابحث",
      },
      hero: { readMore: "اقرأ المزيد" },
      footer: { subscribe: "اشترك", email: "البريد الإلكتروني" },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
