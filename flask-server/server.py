from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define a constant value
SECRET_CODE = "openai"

@app.route('/check_code', methods=['POST'])
def check_code():
    data = request.get_json()
    input_code = data.get('code')

    if input_code == SECRET_CODE:
        response = {
            'message': 'Confirmation: Code is correct!',
            'status': 'success'
        }
    else:
        response = {
            'message': 'Error: Code is incorrect!',
            'status': 'error'
        }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)