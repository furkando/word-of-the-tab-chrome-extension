// get list of translations
const translationHistory = document.querySelector('[role="list"]');
const scrollableParent =
  translationHistory.parentElement.parentElement.parentElement;

// scroll list until the end
const scrollList = () => {
  scrollableParent.scrollTop = scrollableParent.scrollHeight;
};

const scrollInterval = setInterval(() => {
  console.log("scrolling");
  scrollList();
}, 200);

// stop scrolling after 15 seconds
setTimeout(() => {
  clearInterval(scrollInterval);
  storeTranslations();
}, 15000);

const storeTranslations = () => {
  const translationsToStore = new Set();
  const historyItems = translationHistory.children;

  for (let i = 0; i < historyItems.length; i++) {
    const item = historyItems[i];
    const sourceItem = item.children[1];
    const targetItem = item.children[2];

    if (!sourceItem || !targetItem) return;

    const sourceLang = sourceItem.getAttribute("lang");
    const targetLang = targetItem.getAttribute("lang");

    const sourceText = sourceItem.innerText.trim();
    const targetText = targetItem.innerText.trim();

    const sourceWords = sourceText.split(/\s+/);

    // check if source text is a single word and not containing any special characters
    if (sourceWords.length === 1 && sourceText.match(/^[a-zA-Z]+$/)) {
      const translation = { sourceText, targetText, sourceLang, targetLang };
      translationsToStore.add(translation);
    }
  }

  const existingTranslations =
    chrome.storage.local.get(["translations"], (result) => {
      console.log("Value currently is " + JSON.stringify(result, null, 2));
    }) || [];

  const combinedTranslations = [
    ...existingTranslations,
    ...translationsToStore,
  ];

  chrome.storage.local.set({ translations: combinedTranslations }, () => {
    console.log(
      "Value is set to " + JSON.stringify(combinedTranslations, null, 2)
    );
  });
};
