  const translations = { es: {}, en: {} };
  let currentLang = "en"; // Default language
// Check cookie for saved language preference
const savedLang = getCookie("lang");
if (savedLang) {
  currentLang = savedLang; // Use saved language from the cookie
  document.getElementById("toggle-lang").textContent = savedLang === "es" ? "ES" : "EN";
}
  // Load translations on page load
  window.addEventListener("DOMContentLoaded", async () => {
    await loadTranslations("es");
    await loadTranslations("en");
    applyTranslations(); // Apply default language (Spanish)
  });

  // Fetch translation data
  async function loadTranslations(lang) {
    const response = await fetch(`/lang/${lang}.json`);
    translations[lang] = await response.json();
  }

  // Toggle language on button click
  document.getElementById("toggle-lang").addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    document.getElementById("toggle-lang").textContent = currentLang === "es" ? "ES" : "EN";
// Save selected language in cookies
setCookie("lang", currentLang, 30); // 30-day expiration
applyTranslations();  });

  // Apply translations based on the current language
  function applyTranslations() {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      const keys = key.split(".");
      let text = translations[currentLang];
      keys.forEach((k) => text = text?.[k]);
      if (text !== undefined) {
        element.textContent = text;
      }
    });
  }


// Utility function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Utility function to get a cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}
  
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach((nav) => {
        nav.classList.remove('primary');
        nav.classList.add('secondary');
      });
      item.classList.remove('secondary');
      item.classList.add('primary');
    });
  });
  
  document.getElementById("contact-button").addEventListener("click", () => {
    window.location.href = "mailto:evansgxz1@gmail.com";
  });
  

  function toggleMenu() {
    const nav = document.querySelector('.right-nav');
    nav.classList.toggle('show');
  }
