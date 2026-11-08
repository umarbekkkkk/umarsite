"""
Umarbek RPG Character Sheet — Flask Server
Запускает статический сайт как веб-приложение.
"""

from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder=".", static_url_path="")


@app.route("/")
def index():
    """Отдаёт главную страницу."""
    return send_from_directory(".", "index.html")


@app.route("/api/info")
def info():
    """Небольшой API — информация о персонаже (для расширений)."""
    return jsonify({
        "owner": "Umarbek",
        "project": "RPG Character Sheet",
        "version": "1.0",
        "languages": ["ru", "uz", "en"],
        "theme": "purple-blue neon"
    })


@app.errorhandler(404)
def not_found(_):
    return send_from_directory(".", "index.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print("\n" + "=" * 50)
    print(f"🚀 Сервер запущен: http://127.0.0.1:{port}")
    print("=" * 50 + "\n")
    app.run(host="127.0.0.1", port=port, debug=True)