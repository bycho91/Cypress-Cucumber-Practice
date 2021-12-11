# Cypress-Cucumber-Practice

Practicing using Cucumber and Gherkin with Cypress to test zero.webappsecurity.com

## Trying some light practice using BDD with Cypress

## npm install cypress cypress-cucumber-preprocessor

### How to use cypress-cucumber-preprocessor

1. npm install
2. In plugins/index.js:
    - const cucumber = require('cypress-cucumber-preprocessor').default
    - module.exports = (on, config) => {
      on('file:preprocessor', cucumber())  
      }
3. In package.json - we need to add:
    - "cypress-cucumber-preprocessor": {
      "noneGlobalStepDefinitions": true
      }
4. In integration folder, I added a 'cucumber-tests' folder
5. In the above folder - I added login.feature
    - login.feature - this is the file where Gherkin will be used with Given, When, And, Then keywords
        - Feature: ##give TITLE of feature##
        - ##give DESCRIPTION of scenarios that will be tested##
            - Scenario: 'title'
                - Given
                - When
                - And
                - Then
