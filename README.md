# Pipedrive Test Task, July 2022

## GitHub API & Pipedrive API

### Task:

Use the GitHub API to query a user's publicly available GitHub gists and create a deal/activity in Pipedrive for each gist

Implement an application that periodically checks for a user's publicly available gists

This application should also have a web endpoint where it shows the gists for that user that were added since the last visit

* You can use any programming language you want
* No need to get crazy with HTML/CSS or JSON APIs;
  * a simple text response will suffice
* Document your assumptions based on your understanding of the problem and justify your decisions
* Make sure your application provides good output, clear logging and is as clear as possible about what it's doing
* README file with clear instructions on how to run the application on our local computers
* Implement an endpoint that show all users that have been scanned


<!-- # Steps Implemented:

- set up server in Express
- set up two endpoints in `routes/api.js` to return a specific user's gists (`getAllGists`) and to return a specific gist (`getGist`)
- set up a Mongoose connection and defined schemas in `models/user.js` and `models/gists.js`

### Assumptions:
- there is only one filename per gist
  - each gist has a unique ID, but for display purposes for the user, the gist will be identified with a human-readable ID taken from the name of the first file in the gist
    - e.g., 'attestation.txt' in https://gist.github.com/vbuterin

### Commands:
- `npm start` to run nodemon and start the server
- `./node_modules/.bin/eslint <filename>` to run ESLint
 -->
