# Buggy Cars Rating End to end tests

These tests are end to end tests for [Buggy Cars Rating](https://buggy.justtestit.org/) using [Cypress](https://www.cypress.io/) and JavaScript as programming language.

# Installation
1. Install [node](https://nodejs.org/en/download/) based on your OS
2. Clone or download this repo
3. Download Visual Studio (VS) Code
4. Open the BuggyCarsRating project folder
5. Open VS Code terminal and install cypress using the following command
```sh
npm install cypress --save-dev
```

## Usage
### Run all tests without Cypress UI
```sh
npx cypress run
```

### Run test one by one using Cypress UI
1. Open Cypress
```sh
npx cypress open
```
2. Click on E2E Testing
3. Choose Chrome as browser
4. Click Start E2E Testing in Chrome
5. On the left menu, click Specs (second icon) and choose what test you want to run
6. To run more tests, click on Specs tab again and select the test you want to run
