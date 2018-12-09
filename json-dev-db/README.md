#Instructions
1) Open new terminal tab/window and cd into the /json-dev-db directory.  This directory is a separate NPM project, with its own npm modules folder, package.json etc.
2) run npm start, and you will see that the terminal shows you where to go. It's currently set to http://localhost:8888/ . That is the API server URL.  Json-server is an npm package for developers - see https://www.npmjs.com/package/json-server#install.  To run the visiJAM app, you need to cd back into the visiJAM root folder (from another terminal window/tab and run 'gatsby develop' or 'npm develop').
It forces us to follow RESTful conventions. Take a look at the documentation above.  It's excellent.  I've added a test node on the API server, so if you go to your browser and dohttp://localhost:8888/test_node  you will see the json that gets returned.
Depending on our schema, our API end-points may be /users and /hackathon etc
This db emulates a real db, this is very useful for local machine prototyping and emulating DB calls.
I will port across the data from formspree - you will find it as an array at http://localhost:8888/submission
This is **only for testing purposes**.

#SOME GOTCHAS
1) The database endpoints need to be initialised directly in the db.json file.  For example:  before i could create or write to the '/submissions' endpoint I had to first creat it in the JSON file with am empty array.  Please note that JSON formatting is != JS object formatting.  Keys have to be enclosed in "" as they're strings. 
