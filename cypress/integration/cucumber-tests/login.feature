Feature: Login to Application

    As a valid user
    I want to login to Application

    Scenario: Valid Login
      Given I open login page
      When I submit valid login credentials
      Then I should see the home page