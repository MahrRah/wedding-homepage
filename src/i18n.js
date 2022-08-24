import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
	.use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
	.use(LanguageDetector) // detect user language
	.use(initReactI18next) // pass the i18n instance to react-i18next.
	.init({
		backend: {
			// translation file path
			loadPath: "/i18n/{{ns}}/{{lng}}.json",
		},
		fallbackLng: "en",
		// disabled in production
		debug: false,
		ns: ["common", "story", "details", "location", "overview", "rsvp"],
		interpolation: {
			espaceValue: false,
			formatSeparator: ",",
		},
		react: {
			wait: true,
		},
	});

export default i18n;