from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

dummy_data = {
    "101": ['cars', 'bike', 'computers'],
    "102": ['flowers', 'clothing', 'food']
}

@app.route("/health")
def home():
    return "Ok"

@app.route("/getUserRecommendation", methods=['GET', 'POST'])
def get_recommendation():
    data = request.get_json()
    userId = data.get("userId", None)

    if not userId:
        return jsonify(f"BAD Request: userId missing"), 400
    if userId not in dummy_data:
        return jsonify(f"User not found"), 404
    
    result = dummy_data[userId]
    return jsonify(result), 200

def run():
    app.run()

if __name__ == "__main__":
    run()