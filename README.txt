How to setup a dev environment with Geany:
- Download and install NodeJS: https://nodejs.org/
- Download and install Geany along with Geany-Plugins: http://www.geany.org/
- Open NativeChess.geany and go to Project > Properties to configure base path properly

How to configure and run
    in Geany:
        In Build menu, select 1) Install Dependencies
                              2) Make
                              3) Run
    without Geany:
	- Open a terminal from base path
	- Install dependencies by running "npm install"
	- Make the game script by running "gulp"
	- Run into browser by running "npm start"