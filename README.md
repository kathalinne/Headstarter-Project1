# Air Quality Web App
## Description
The track we ended up choosing was the climate related track. What we were looking to solve with this project was to create a web app that uses up-to-date data to understand the air quality of an area. We chose this hackathon to work on a tech stack that we weren't too familiar with to build upon our skills as programmers. This user-friendly application is designed to provide real-time air quality rates and even weather updates using AirVisual API. It combines the power of Flask and Python on the backend with the dynamic, responsive interface of React on the frontend.

## Improvements
We would like to add machine learning models that aid in the analysis of prolonged bad quality climate to predict which locations need to increase the quality of it environment the most. This includes investments for more plants in the area, mitgating greenhouse gases by nearby polluters, etc. Experts may not know where to start, but by tracking and denoting air quality trends, it become easier to find which areas need the most attention. By using both past and present data, we can predict the liklihood that a certain area needs more attention to their air quality. As a team we have developed a rudimentary application in which we can build upon to make it more likely to aid in the problem that is climate change and to start tackling it by focusing on the locations that needs the most help.

## How to Use
1. Create two working terminals. Terminal 1: cd into client & Terminal 2: cd into flask-server
2. In terminal 2, make sure there is no venv file in flask-server folder, if so ``` rmdir venv ```
3. In temrinal 2, then create a new one using ``` python -m venv venv ```
4. In terminal 2, activate virtual environment by running ``` .\venv\Scripts\activate ```
5. In terminal 2, ``` pip install Flask ```, update if needed
6. In terminal 2, ```pip install flask-cors```
7. In terminal 2, ```pip install requests```
8. In terminal 2, run python file by runninh ``` python server.py ``` , then view page at given url
9. In termina 1, run ```npm install axios```
10. In terminal 1, run ```npm start``` 
11. App is now fully runnin! (notice commands given is for Windows)

To end running app, simply CTRL-C for both terminals, then to deactivate virtual environment in Terminal 2, type in command ```deactivate```

## Resources
https://api-docs.iqair.com/?version=latest
