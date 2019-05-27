import { CHANGE_LANG } from '../actions/langActions';

const allowedLanguages = ['en', 'pl'];
const defaultLang = 'en';

export function setDefaultLang() {
  const browserLang = navigator.language;
  if(!allowedLanguages.includes(browserLang)) {
    return defaultLang;
  } 
  return browserLang;
} 

export default function langReducer(state = defaultLang, { type, lang }) {
  if (type === CHANGE_LANG) {
    return lang;
  }
  return state;
}