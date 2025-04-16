document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const languageSelect = document.getElementById("languageSelect");
    const translateBtn = document.getElementById("translateBtn");
    const readInputBtn = document.getElementById("readInputBtn");
    const readOutputBtn = document.getElementById("readOutputBtn");
    const stopBtn = document.getElementById("stopBtn");
    const outputText = document.getElementById("outputText");
    const detectedLang = document.getElementById("detectedLang");

    let speechInstance = null; // Store speech instance to stop it later

    // Function to detect language
    function detectLanguage(text) {
        if (!text.trim()) {
            detectedLang.innerText = "Unknown";
            return;
        }

        fetch(`/detect_lang?text=${encodeURIComponent(text)}`)
            .then(response => response.json())
            .then(data => {
                detectedLang.innerText = data.detected_lang || "Unknown";
            })
            .catch(error => {
                console.error("Error detecting language:", error);
                detectedLang.innerText = "Error";
            });
    }

    // Detect language as user types
    textInput.addEventListener("input", function () {
        detectLanguage(this.value);
    });

    // Function to translate text
    translateBtn.addEventListener("click", function () {
        const text = textInput.value;
        const targetLang = languageSelect.value;

        if (!text.trim()) {
            alert("Please enter text to translate.");
            return;
        }

        fetch("/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: text, target_lang: targetLang })
        })
            .then(response => response.json())
            .then(data => {
                if (data.translated_text) {
                    outputText.innerText = data.translated_text;
                } else {
                    alert("Translation failed.");
                }
            })
            .catch(error => console.error("Error:", error));
    });

    // Function for text-to-speech
    function speakText(text, lang) {
        stopSpeech(); // Stop any ongoing speech before starting new

        speechInstance = new SpeechSynthesisUtterance(text);
        speechInstance.lang = lang;

        window.speechSynthesis.speak(speechInstance);
    }

    // Stop speech synthesis
    function stopSpeech() {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
    }

    // Read input text aloud
    readInputBtn.addEventListener("click", function () {
        const text = textInput.value;
        if (text.trim()) {
            const lang = detectedLang.innerText === "Unknown" ? "auto" : detectedLang.innerText;
            speakText(text, lang);
        } else {
            alert("Please enter text to read aloud.");
        }
    });

    // Read translated text aloud
    readOutputBtn.addEventListener("click", function () {
        const text = outputText.innerText;
        const lang = languageSelect.value;
        if (text.trim()) {
            speakText(text, lang);
        } else {
            alert("No translated text to read.");
        }
    });

    // Stop speech when stop button is clicked
    stopBtn.addEventListener("click", stopSpeech);
});

function copyTranslatedText() {
    const output = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert("Translation copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
}
