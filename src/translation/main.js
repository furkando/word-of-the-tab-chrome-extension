// UTIL
const oxfordTranslations = [
  {
    sourceLang: "en",
    sourceText: "ability",
    targetLang: "tr",
    targetText: "yetenek",
  },
  {
    sourceLang: "en",
    sourceText: "access",
    targetLang: "tr",
    targetText: "erişim",
  },
  {
    sourceLang: "en",
    sourceText: "accident",
    targetLang: "tr",
    targetText: "kaza",
  },
  {
    sourceLang: "en",
    sourceText: "achievement",
    targetLang: "tr",
    targetText: "başarı",
  },
  {
    sourceLang: "en",
    sourceText: "active",
    targetLang: "tr",
    targetText: "aktif",
  },
  {
    sourceLang: "en",
    sourceText: "administration",
    targetLang: "tr",
    targetText: "yönetim",
  },
  {
    sourceLang: "en",
    sourceText: "advantage",
    targetLang: "tr",
    targetText: "avantaj",
  },
  {
    sourceLang: "en",
    sourceText: "adventure",
    targetLang: "tr",
    targetText: "macera",
  },
  {
    sourceLang: "en",
    sourceText: "advice",
    targetLang: "tr",
    targetText: "tavsiye",
  },
  {
    sourceLang: "en",
    sourceText: "affection",
    targetLang: "tr",
    targetText: "sevgi",
  },
  {
    sourceLang: "en",
    sourceText: "afternoon",
    targetLang: "tr",
    targetText: "öğleden sonra",
  },
  {
    sourceLang: "en",
    sourceText: "against",
    targetLang: "tr",
    targetText: "karşı",
  },
  {
    sourceLang: "en",
    sourceText: "agreement",
    targetLang: "tr",
    targetText: "anlaşma",
  },
  {
    sourceLang: "en",
    sourceText: "air",
    targetLang: "tr",
    targetText: "hava",
  },
  {
    sourceLang: "en",
    sourceText: "alarm",
    targetLang: "tr",
    targetText: "alarm",
  },
  {
    sourceLang: "en",
    sourceText: "ambition",
    targetLang: "tr",
    targetText: "hırs",
  },
  {
    sourceLang: "en",
    sourceText: "animal",
    targetLang: "tr",
    targetText: "hayvan",
  },
  {
    sourceLang: "en",
    sourceText: "announcement",
    targetLang: "tr",
    targetText: "duyuru",
  },
  {
    sourceLang: "en",
    sourceText: "apartment",
    targetLang: "tr",
    targetText: "daire",
  },
  {
    sourceLang: "en",
    sourceText: "appointment",
    targetLang: "tr",
    targetText: "randevu",
  },
  {
    sourceLang: "en",
    sourceText: "area",
    targetLang: "tr",
    targetText: "alan",
  },
  {
    sourceLang: "en",
    sourceText: "argument",
    targetLang: "tr",
    targetText: "argüman",
  },
  {
    sourceLang: "en",
    sourceText: "arrival",
    targetLang: "tr",
    targetText: "varış",
  },
  {
    sourceLang: "en",
    sourceText: "article",
    targetLang: "tr",
    targetText: "makale",
  },
  {
    sourceLang: "en",
    sourceText: "artist",
    targetLang: "tr",
    targetText: "sanatçı",
  },
  {
    sourceLang: "en",
    sourceText: "as",
    targetLang: "tr",
    targetText: "olarak",
  },
  {
    sourceLang: "en",
    sourceText: "ask",
    targetLang: "tr",
    targetText: "sormak",
  },
  {
    sourceLang: "en",
    sourceText: "assistant",
    targetLang: "tr",
    targetText: "asistan",
  },
  {
    sourceLang: "en",
    sourceText: "at",
    targetLang: "tr",
    targetText: "de",
  },
  {
    sourceLang: "en",
    sourceText: "attention",
    targetLang: "tr",
    targetText: "dikkat",
  },
  {
    sourceLang: "en",
    sourceText: "attitude",
    targetLang: "tr",
    targetText: "tavır",
  },
  {
    sourceLang: "en",
    sourceText: "author",
    targetLang: "tr",
    targetText: "yazar",
  },
  {
    sourceLang: "en",
    sourceText: "average",
    targetLang: "tr",
    targetText: "ortalama",
  },
  {
    sourceLang: "en",
    sourceText: "award",
    targetLang: "tr",
    targetText: "ödül",
  },
  {
    sourceLang: "en",
    sourceText: "aware",
    targetLang: "tr",
    targetText: "farkında",
  },
  {
    sourceLang: "en",
    sourceText: "away",
    targetLang: "tr",
    targetText: "uzak",
  },
  {
    sourceLang: "en",
    sourceText: "baby",
    targetLang: "tr",
    targetText: "bebek",
  },
  {
    sourceLang: "en",
    sourceText: "back",
    targetLang: "tr",
    targetText: "geri",
  },
  {
    sourceLang: "en",
    sourceText: "bad",
    targetLang: "tr",
    targetText: "kötü",
  },
  {
    sourceLang: "en",
    sourceText: "balance",
    targetLang: "tr",
    targetText: "denge",
  },
  {
    sourceLang: "en",
    sourceText: "ball",
    targetLang: "tr",
    targetText: "top",
  },
  {
    sourceLang: "en",
    sourceText: "band",
    targetLang: "tr",
    targetText: "grup",
  },
  {
    sourceLang: "en",
    sourceText: "bank",
    targetLang: "tr",
    targetText: "banka",
  },
  {
    sourceLang: "en",
    sourceText: "bar",
    targetLang: "tr",
    targetText: "bar",
  },
  {
    sourceLang: "en",
    sourceText: "base",
    targetLang: "tr",
    targetText: "temel",
  },
  {
    sourceLang: "en",
    sourceText: "basket",
    targetLang: "tr",
    targetText: "sepet",
  },
  {
    sourceLang: "en",
    sourceText: "bath",
    targetLang: "tr",
    targetText: "banyo",
  },
  {
    sourceLang: "en",
    sourceText: "be",
    targetLang: "tr",
    targetText: "olmak",
  },
  {
    sourceLang: "en",
    sourceText: "beautiful",
    targetLang: "tr",
    targetText: "güzel",
  },
  {
    sourceLang: "en",
    sourceText: "because",
    targetLang: "tr",
    targetText: "çünkü",
  },
  {
    sourceLang: "en",
    sourceText: "become",
    targetLang: "tr",
    targetText: "olmak",
  },
  {
    sourceLang: "en",
    sourceText: "bed",
    targetLang: "tr",
    targetText: "yatak",
  },
  {
    sourceLang: "en",
    sourceText: "begin",
    targetLang: "tr",
    targetText: "başlamak",
  },
  {
    sourceLang: "en",
    sourceText: "believe",
    targetLang: "tr",
    targetText: "inanmak",
  },
  {
    sourceLang: "en",
    sourceText: "benefit",
    targetLang: "tr",
    targetText: "fayda",
  },
  {
    sourceLang: "en",
    sourceText: "beside",
    targetLang: "tr",
    targetText: "yanında",
  },
  {
    sourceLang: "en",
    sourceText: "best",
    targetLang: "tr",
    targetText: "en iyi",
  },
  {
    sourceLang: "en",
    sourceText: "between",
    targetLang: "tr",
    targetText: "arasında",
  },
  {
    sourceLang: "en",
    sourceText: "big",
    targetLang: "tr",
    targetText: "büyük",
  },
  {
    sourceLang: "en",
    sourceText: "birth",
    targetLang: "tr",
    targetText: "doğum",
  },
  {
    sourceLang: "en",
    sourceText: "bit",
    targetLang: "tr",
    targetText: "parça",
  },
  {
    sourceLang: "en",
    sourceText: "black",
    targetLang: "tr",
    targetText: "siyah",
  },
  {
    sourceLang: "en",
    sourceText: "block",
    targetLang: "tr",
    targetText: "blok",
  },
  {
    sourceLang: "en",
    sourceText: "blood",
    targetLang: "tr",
    targetText: "kan",
  },
  {
    sourceLang: "en",
    sourceText: "blow",
    targetLang: "tr",
    targetText: "üflemek",
  },
  {
    sourceLang: "en",
    sourceText: "blue",
    targetLang: "tr",
    targetText: "mavi",
  },
  {
    sourceLang: "en",
    sourceText: "board",
    targetLang: "tr",
    targetText: "tahta",
  },
  {
    sourceLang: "en",
    sourceText: "boat",
    targetLang: "tr",
    targetText: "tekne",
  },
  {
    sourceLang: "en",
    sourceText: "body",
    targetLang: "tr",
    targetText: "vücut",
  },
  {
    sourceLang: "en",
    sourceText: "book",
    targetLang: "tr",
    targetText: "kitap",
  },
  {
    sourceLang: "en",
    sourceText: "border",
    targetLang: "tr",
    targetText: "sınır",
  },
  {
    sourceLang: "en",
    sourceText: "born",
    targetLang: "tr",
    targetText: "doğmuş",
  },
  {
    sourceLang: "en",
    sourceText: "bother",
    targetLang: "tr",
    targetText: "rahatsız etmek",
  },
  {
    sourceLang: "en",
    sourceText: "bottom",
    targetLang: "tr",
    targetText: "alt",
  },
  {
    sourceLang: "en",
    sourceText: "bottle",
    targetLang: "tr",
    targetText: "şişe",
  },
  {
    sourceLang: "en",
    sourceText: "box",
    targetLang: "tr",
    targetText: "kutu",
  },
  {
    sourceLang: "en",
    sourceText: "boy",
    targetLang: "tr",
    targetText: "erkek çocuk",
  },
  {
    sourceLang: "en",
    sourceText: "brain",
    targetLang: "tr",
    targetText: "beyin",
  },
  {
    sourceLang: "en",
    sourceText: "branch",
    targetLang: "tr",
    targetText: "dal",
  },
  {
    sourceLang: "en",
    sourceText: "break",
    targetLang: "tr",
    targetText: "kırmak",
  },
  {
    sourceLang: "en",
    sourceText: "breath",
    targetLang: "tr",
    targetText: "nefes",
  },
  {
    sourceLang: "en",
    sourceText: "bridge",
    targetLang: "tr",
    targetText: "köprü",
  },
  {
    sourceLang: "en",
    sourceText: "bright",
    targetLang: "tr",
    targetText: "parlak",
  },
  {
    sourceLang: "en",
    sourceText: "bring",
    targetLang: "tr",
    targetText: "getirmek",
  },
  {
    sourceLang: "en",
    sourceText: "brother",
    targetLang: "tr",
    targetText: "erkek kardeş",
  },
  {
    sourceLang: "en",
    sourceText: "brown",
    targetLang: "tr",
    targetText: "kahverengi",
  },
  {
    sourceLang: "en",
    sourceText: "build",
    targetLang: "tr",
    targetText: "inşa etmek",
  },
  {
    sourceLang: "en",
    sourceText: "business",
    targetLang: "tr",
    targetText: "iş",
  },
  {
    sourceLang: "en",
    sourceText: "busy",
    targetLang: "tr",
    targetText: "meşgul",
  },
  {
    sourceLang: "en",
    sourceText: "but",
    targetLang: "tr",
    targetText: "ama",
  },
  {
    sourceLang: "en",
    sourceText: "buy",
    targetLang: "tr",
    targetText: "satın almak",
  },
  {
    sourceLang: "en",
    sourceText: "by",
    targetLang: "tr",
    targetText: "tarafından",
  },
  {
    sourceLang: "en",
    sourceText: "cake",
    targetLang: "tr",
    targetText: "pasta",
  },
  {
    sourceLang: "en",
    sourceText: "call",
    targetLang: "tr",
    targetText: "aramak",
  },
  {
    sourceLang: "en",
    sourceText: "camera",
    targetLang: "tr",
    targetText: "kamera",
  },
  {
    sourceLang: "en",
    sourceText: "can",
    targetLang: "tr",
    targetText: "yapabilir",
  },
  {
    sourceLang: "en",
    sourceText: "capital",
    targetLang: "tr",
    targetText: "başkent",
  },
  {
    sourceLang: "en",
    sourceText: "car",
    targetLang: "tr",
    targetText: "araba",
  },
  {
    sourceLang: "en",
    sourceText: "card",
    targetLang: "tr",
    targetText: "kart",
  },
  {
    sourceLang: "en",
    sourceText: "care",
    targetLang: "tr",
    targetText: "bakım",
  },
  {
    sourceLang: "en",
    sourceText: "careful",
    targetLang: "tr",
    targetText: "dikkatli",
  },
  {
    sourceLang: "en",
    sourceText: "carry",
    targetLang: "tr",
    targetText: "taşımak",
  },
  {
    sourceLang: "en",
    sourceText: "case",
    targetLang: "tr",
    targetText: "durum",
  },
  {
    sourceLang: "en",
    sourceText: "cat",
    targetLang: "tr",
    targetText: "kedi",
  },
  {
    sourceLang: "en",
    sourceText: "catch",
    targetLang: "tr",
    targetText: "yakalamak",
  },
  {
    sourceLang: "en",
    sourceText: "cause",
    targetLang: "tr",
    targetText: "neden",
  },
  {
    sourceLang: "en",
    sourceText: "cell",
    targetLang: "tr",
    targetText: "hücre",
  },
  {
    sourceLang: "en",
    sourceText: "cent",
    targetLang: "tr",
    targetText: "sent",
  },
  {
    sourceLang: "en",
    sourceText: "central",
    targetLang: "tr",
    targetText: "merkezi",
  },
  {
    sourceLang: "en",
    sourceText: "centre",
    targetLang: "tr",
    targetText: "merkez",
  },
  {
    sourceLang: "en",
    sourceText: "century",
    targetLang: "tr",
    targetText: "yüzyıl",
  },
  {
    sourceLang: "en",
    sourceText: "certain",
    targetLang: "tr",
    targetText: "belirli",
  },
  {
    sourceLang: "en",
    sourceText: "chair",
    targetLang: "tr",
    targetText: "sandalye",
  },
  {
    sourceLang: "en",
    sourceText: "chance",
    targetLang: "tr",
    targetText: "şans",
  },
  {
    sourceLang: "en",
    sourceText: "change",
    targetLang: "tr",
    targetText: "değişim",
  },
  {
    sourceLang: "en",
    sourceText: "character",
    targetLang: "tr",
    targetText: "karakter",
  },
  {
    sourceLang: "en",
    sourceText: "charge",
    targetLang: "tr",
    targetText: "şarj",
  },
];

class TranslationComponent extends HTMLElement {
  static styles = `
      <style>
        /* Define your component's styles here */
        .translation-container {
          display: flex;
          align-items: center;
          justify-content: space-between; 
          margin-top: 20px;
          background-color: #fafafa;
          border-radius: 5px;
          position: relative;
          min-width: 320px;
          margin-bottom: 12px;
        }

        .source-language,
        .target-language {
          width: 50%;
        }

  
        .translation-box {
          border: none;
          padding: 10px 0;
          text-align: center;
          width: 100%;
          font-size: 1.5rem;
          color: #000;
        }

        .language-info {
          position: absolute;          
          padding: 5px;
          font-size: 0.8rem;
          color: #000;
          text-align: right;
        }

        .source-language > .language-info {
          left: 0;
          right: auto;
        }

        .target-language > .language-info {
          left: auto;
          right: 0;
        }
  
        .arrow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }
        
        .arrow::before {
          content: "→"; /* Unicode character for right arrow */
          font-size: 1.2em; /* Adjust the size of the arrow as needed */
          color: #000; /* Arrow color */
        }
                
      </style>
    `;

  get template() {
    return `
        ${TranslationComponent.styles}
        <div class="translation-container">
          <div class="source-language">
            <div class="language-info" id="sourceLanguage"></div>
            <div class="translation-box" id="sourceText"></div>
          </div>
          <div class="arrow"></div>
          <div class="target-language">
            <div class="language-info" id="targetLanguage"></div>
            <div class="translation-box" id="targetText"></div>
          </div>
        </div>
      `;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    const arrowElement = this.shadowRoot.querySelector(".arrow");
    arrowElement.addEventListener("click", () => {
      this.loadAndDisplayTranslation();
    });
    this.loadAndDisplayTranslation();
  }

  loadAndDisplayTranslation() {
    // Load translations from Chrome's local storage (assuming the key is 'translations')
    chrome.storage.local.get("translations", (data) => {
      const storedTranslations = data.translations || [];
      const predefinedTranslations = oxfordTranslations;

      const translations = [...storedTranslations, ...predefinedTranslations];
      // Select a random translation
      const randomIndex = Math.floor(Math.random() * translations.length);
      const randomTranslation = translations[randomIndex];

      // Display the source and target text in the component
      const sourceLanguageElement =
        this.shadowRoot.getElementById("sourceLanguage");
      const sourceTextElement = this.shadowRoot.getElementById("sourceText");
      const targetLanguageElement =
        this.shadowRoot.getElementById("targetLanguage");
      const targetTextElement = this.shadowRoot.getElementById("targetText");

      if (randomTranslation) {
        sourceLanguageElement.textContent = randomTranslation.sourceLang;
        sourceTextElement.textContent = randomTranslation.sourceText;
        targetLanguageElement.textContent = randomTranslation.targetLang;
        targetTextElement.textContent = randomTranslation.targetText;
      }
    });
  }
}

customElements.define("translation-component", TranslationComponent);
