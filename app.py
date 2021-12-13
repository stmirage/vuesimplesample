from flask import Flask, jsonify, render_template
from flask_cors import CORS
import random, string

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)

def make_random_data():
	return [
    {
        'title': ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits) for _ in range(10)),
        'author': ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits) for _ in range(10)),
        'read': True
    } for _ in range(3)
]

# реализация на vue
@app.route('/randomdata', methods=['GET'])
def ping_pong():
    return jsonify(make_random_data())

# реализация на статике
@app.route('/stat', methods=['GET'])
def stat():
    return render_template("stat.html",table_data = make_random_data())

@app.route('/', methods=['GET'])
def index_page():
    return app.send_static_file("index.html")

if __name__ == '__main__':
    print(make_random_data())
    app.run()