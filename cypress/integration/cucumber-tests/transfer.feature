Feature: Transfer Payment

    Transfer payment to another account

    Scenario: Successful Transfer
      Given I have money in savings
      When I put in transfer to another account
      Then The money should transfer

    Scenario: Transfer Failure
      Given I have not enough money in savings
      When I put in transfer to another account
      Then The transfer should fail