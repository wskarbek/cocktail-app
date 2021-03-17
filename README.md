![logo](https://github.com/wskarbek/cocktail-app/blob/main/client/public/logo.png)

Cocktail app is a react + express app about various cocktail drinks. You can check the application there: https://ca.wskarbek.xyz/. It was a project for BIU subject at PJAIT university.
# Features
* Drink list
* Drink pages with recipe and needed ingridients 
* Drinks can be rated and commented
* Admin page that allows managing drinks and comments
* Statistics about drinks

# Installation and running
The application consist of Express Server and React.js Client. You need to run both to run the application.

## Server (run the server first)
* Configure admin password in .env file (refer to example .env)
* npm install
* npm start

## Client
* Configure .env file (refer to example .env file)
* (linux only) echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
* npm install
* npm start
