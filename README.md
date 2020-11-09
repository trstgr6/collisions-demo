# Setup instructions

## 1 Install Node.js
Install node from https://nodejs.org/en/

## 2 Create Project Folder (if needed)
This can be done with the mkdir command line tool
`mkdir ~/dev/foo`

## 2 Install Jasmine testing suite
Full instructions can be found at https://jasmine.github.io/pages/getting_started.html

Locate project folder in the command line
`cd ~/dev/foo`

Add Jasmine to your package.json
`npm install --save-dev jasmine`

Initialize Jasmine in your project
`npx jasmine init`

Set jasmine as your test script in your package.json
`"scripts": { "test": "jasmine" }`

Run your tests
`npm test`