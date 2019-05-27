import { EN_LOCALE } from './en';
import { PL_LOCALE } from './pl';

export function getLocale(locale) {
  if(locale === 'pl') {
    return PL_LOCALE;
  } else {
    return EN_LOCALE;
  }
}
