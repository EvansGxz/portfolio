import { JSDOM } from 'jsdom';

describe('applyTranslations', () => {
  let document;
  let translations;
  let currentLang;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    document = dom.window.document;
    global.document = document;

    translations = {
      en: { greeting: { hello: 'Hello' } },
      es: { greeting: { hello: 'Hola' } }
    };
    currentLang = 'en';
  });
});

function applyTranslations() {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    const keys = key.split(".");
    let text = translations[currentLang];
    keys.forEach((k) => text = text?.[k]);
    if (text) {
      element.textContent = text;
    }
  });
}
