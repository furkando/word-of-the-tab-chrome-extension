// get list of translations
const translationHistory = document.querySelector('[role="list"]');
const scrollableParent = list.parentElement.parentElement.parentElement;

// scroll list until the end
const scrollList = () => {
  scrollableParent.scrollTop = scrollableParent.scrollHeight;
};

const scrollInterval = setInterval(() => {
  console.log("scrolling");
  scrollList();
}, 200);

// stop scrolling after 5 seconds
setTimeout(() => {
  clearInterval(scrollInterval);
  storeTranslations();
}, 5000);

const storeTranslations = () => {
  const translationsToStore = new Set();
  const historyItems = translationHistory.children;
  historyItems.map((item) => {
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
  });

  translationsToStore.forEach((item) => {
    console.log(item);
  });
};

// chrome.storage.local.set({ key: myObject }, () => {
//   console.log("Value is set to " + myObject);
// });
