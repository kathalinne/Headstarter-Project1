# Air Quality Web App
## Description
The track we ended up choosing was the climate related track. What we were looking to solve with this project was to create a web app that uses up-to-date data to understand the air quality of an area. We chose this hackathon to work on a tech stack that we weren't too familiar with to build upon our skills as programmers. This user-friendly application is designed to provide real-time air quality rates and even weather updates using AirVisual API. It combines the power of Flask and Python on the backend with the dynamic, responsive interface of React on the frontend.

## Improvements
We would like to add machine learning models that aid in the analysis of prolonged bad quality climate to predict which locations need to increase the quality of its environment the most. In application, this includes investments for more plants in the area, mitgating greenhouse gases by nearby polluters, etc. Experts may not know where to start, but by tracking and denoting air quality trends, it becomes easier to find which areas need the most attention. By using both past and present data, we can predict the liklihood that a certain area needs more attention to their air quality. As a team we have developed a rudimentary application in which we can build upon to make it more likely to aid in the problem that is climate change and to start tackling it by focusing on the locations that needs the most help.

## How to Use
### Windows
1. Create two working terminal:
    #### Terminal One:
    a. ```cd flask-server```
    b. Make sure there is not a venv file in the flask-server folder
        1. If there is run ```rmdir venv```
    c. Create a new virtual environment using: ```python -m venv venv```
    d. Activate the virtual environment by running: ``` .\venv\Scripts\activate ```
    e. Install Flask: ```pip install Flask```
        1. update if needed
    f. Install: ```pip install flask-cors```
    g. Install: ```pip install requests```
    h. Run python file: ```python server.py```
    i. View page at given URL
    #### Terminal Two:
    a. ```cd client```
    b. Run: ```npm install axios```
    c. Start the React app by running: ```npm start```

### Mac
1. Create two working terminals:
    #### Terminal One:
    a. ```cd flask-server```
    b. Make sure there is not a venv file in the flask-server folder
        1. If there is run ```rm -rf venv```
    c. Create a new virtual environment using: ```python3 -m venv venv```
    d. Activate the virtual environment by running: ```source venv/bin/activate```
    e. Install Flask: ```pip install Flask```
        1. update if needed
    f. Install: ```pip install flask-cors```
    g. Install: ```pip install requests```
    h. Run python file: ```python3 server.py```
    i. View page at given URL
    
    #### Terminal Two:
    a. ```cd client```
    b. Run: ```npm install axios```
    c. Start the React app by running: ```npm start```

    App is now fully running!


To end running app, simply CTRL-C for both terminals, then to deactivate virtual environment in Terminal 2, type in command ```deactivate```

## Resources
https://api-docs.iqair.com/?version=latest
