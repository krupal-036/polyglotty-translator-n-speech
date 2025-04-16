from flask import Flask, render_template, request, jsonify
from googletrans import Translator
from gtts import gTTS
import os

app = Flask(__name__)
translator = Translator()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/translate", methods=["POST"])
def translate_text():
    data = request.json
    text = data.get("text")
    target_lang = data.get("target_lang")

    if not text or not target_lang:
        return jsonify({"error": "Missing text or target language"}), 400

    try:
        translated = translator.translate(text, dest=target_lang)
        return jsonify({"translated_text": translated.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/text-to-speech", methods=["POST"])
def text_to_speech():
    data = request.json
    text = data.get("text")
    lang = data.get("lang", "en")  # Default to English

    if not text:
        return jsonify({"error": "Missing text"}), 400

    try:
        tts = gTTS(text=text, lang=lang)
        filename = "static/speech.mp3"
        tts.save(filename)
        return jsonify({"audio_url": filename})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
        
@app.route("/detect_lang")
def detect_lang():
    text = request.args.get("text", "")

    if not text.strip():
        return jsonify({"detected_lang": "Unknown"})

    try:
        detected_lang = translator.detect(text).lang
        return jsonify({"detected_lang": detected_lang})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)


