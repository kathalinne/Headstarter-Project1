from flask import Flask, jsonify, request
import requests
app = Flask(__name__)

API_KEY = "26cbc76c-5aef-4cdd-a431-ebb55b26744a"

@app.route("/query_city")
def get_city_info():
  city = request.args.get('city')
  state = request.args.get('state')

  url = f"http://api.airvisual.com/v2/city?city={city}&state={state}&country=USA&key={API_KEY}"
  response = requests.get(url)

  if response.status_code == 200:
    data = response.json()
    result = {
      "city": data['data']['city'],
      "aqi": data['data']['current']['pollution']['aqius'],
      "temp": data['data']['current']['weather']['tp'],
      "humidity": data['data']['current']['weather']['hu'],
      "windspeed": data['data']['current']['weather']['ws']
    }
    return jsonify(result)
  else:
    return jsonify({"error": "Failed to fetch data"}), response.status_code

if __name__ == "__main__":
    app.run(debug=True)