Feature: Login to Application

    As an invalid user
    I cannot log into application
    As a valid user
    I want to login to Application

    Scenario: Invalid Login
      Given I open login page
      When I fill username with "invalid_username"
      And I fill password with "invalid_password"
      And I click on submit login
      Then I should see an error message


    @focus
    Scenario: Valid Login
      Given I open login page
      When I fill username with "username"
      And I fill password with "password"
      And I click on submit login
      Then I should see the home page

    
