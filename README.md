![logo](https://raw.githubusercontent.com/BogateInterfejsyWebowePJATK/projekt1-wskarbek/wskarbek-dev/client/public/logo.png?token=AJL3WPDRWET2PUZZROWA4XLAHOPEW)

Cocktail app is a react + express app about various cocktail drinks. You can check the application there: https://cocktail-app-biu.herokuapp.com/

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