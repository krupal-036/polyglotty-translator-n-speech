# 🌐 Polyglotty Translator and Speech

**Polyglotty Translator and Speech** is a powerful, minimalistic web application that allows users to seamlessly translate text between languages and convert both the original and translated text into speech — right in your browser. Whether you're learning a new language, practicing pronunciation, or communicating across borders, Polyglotty has you covered.

Built using **Flask**, **JavaScript**, and **Google APIs**, this tool offers seamless translation and natural-sounding text-to-speech functionality, wrapped in a clean and responsive UI.

---

## ✨ Features

- 🌍 Detects and translates between multiple languages
- 🔊 Text-to-Speech for both input and translated text
- 🔁 Real-time Text Translation
- 🗣️ Text-to-Speech (Input & Output)
- ⚡ Fast, intuitive, and responsive interface

---

## 📁 Folder Structure

```
polyglotty-translator-n-speech/
├── app.py                 # Flask backend logic
├── static/
│   ├── script.js          # JavaScript for interactivity
│   └── style.css          # Styling for the app
├── templates/
│   └── index.html         # Frontend HTML (rendered by Flask)
├── requirements.txt       # Python dependencies
├── LICENCE                # MIT LICENCE
└── README.md              # Project documentation (this file)

```

---

## 🚀 Requirements

- Python 3.7 or higher
- pip (Python package manager)

### 📦 Python Packages Used
- Flask — Web framework for building the app
- googletrans (v4.0.0-rc1) — Language detection and translation
- gTTS — Google Text-to-Speech API

---

## 📚 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **APIs/Libraries**:
  - [`googletrans`](https://pypi.org/project/googletrans/) for translation
  - [`gTTS`](https://pypi.org/project/gTTS/) for text-to-speech synthesis

---


## 📄 requirements.txt

```
Flask
gTTS
googletrans==4.0.0-rc1
```


## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/krupal-036/polyglotty-translator-n-speech.git
cd polyglotty-translator-n-speech
```

### 2. Set Up a Virtual Environment (Optional)

```bash
python -m venv venv
# Activate the environment:
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 3. Install Required Packages

```bash
pip install Flask googletrans==4.0.0-rc1 gTTS
```

Or install from requirements.txt:

```bash
pip install -r requirements.txt
```

### 4. Run the Flask App

```bash
python app.py
```

Then open your browser and go to `http://127.0.0.1:5000/`.

---


## 📌 Future Improvements

- 🎙️ Add voice input (speech-to-text)
- 💬 Chat-style history of translations
- 🌐 Multilingual UI
- 🔁 Bi-directional language swap button

---

## 🛡️ License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

## 👨‍💻 Author

Developed by [Krupal Fataniya](https://github.com/krupal-036)

Feel free to contribute or fork the project!

For any issues, feel free to ask [Krupal](mailto:krupalfataniya007@gmail.com). 😊