<!-- translate.js -->
<script>
// ============================================================
// 🌍 TRADUCCIÓN AUTOMÁTICA CON GOOGLE TRANSLATE API
// Incluye detección automática de idioma del navegador.
// ============================================================

// 🔧 Tu clave de Google Cloud Translation API:
const GOOGLE_TRANSLATE_API_KEY = "AIzaSyDxaLcVAAyZ-qE6kH7DwhuD2v24sYjGXlw";

// Detecta idioma del navegador
let userLang = navigator.language.substring(0, 2);
const supported = ["es","en","fr","de","it","pt","zh","ru"];
if (!supported.includes(userLang)) userLang = "es";

// Cambia el selector si existe
window.addEventListener("load", () => {
  const select = document.getElementById("languageSelect");
  if (select) select.value = userLang;
  translatePage(userLang);
});

document.addEventListener("change", (e) => {
  if (e.target.id === "languageSelect") translatePage(e.target.value);
});

// Traduce texto de toda la página
async function translatePage(targetLang) {
  if (targetLang === "es") return; // idioma base

  const elements = document.querySelectorAll("[data-i18n], [data-i18n-placeholder]");
  const texts = [];

  elements.forEach(el => {
    if (el.hasAttribute("data-i18n")) texts.push(el.textContent.trim());
    else if (el.hasAttribute("data-i18n-placeholder")) texts.push(el.placeholder.trim());
  });

  const body = { q: texts, target: targetLang, source: "es", format: "text" };
  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_TRANSLATE_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!result.data) return;

  let i = 0;
  elements.forEach(el => {
    const translated = result.data.translations[i]?.translatedText || "";
    if (el.hasAttribute("data-i18n")) el.textContent = translated;
    else if (el.hasAttribute("data-i18n-placeholder")) el.placeholder = translated;
    i++;
  });
}
</script>
