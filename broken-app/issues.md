# Broken App Issues

- app, axios, and express should all be consts since they don't ever need to change. for some reason only express was a const?

- added a console.log to the app.listen to confirm that the server is running

- there was no actual error handling implemented

- added app.use(express.json()) so the app can parse json requests

- whoever wrote this was doing some weird crazy shit with two different map functions, but i cleaned that up by just having a loop that pushes the relevant info into a new array.

