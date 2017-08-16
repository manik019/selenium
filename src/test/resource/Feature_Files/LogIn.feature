Feature: Login to salesforcee

  @login
  Scenario Outline: Logging in salesforce
    Given I go to "loginURL" on "<Browser>"
    And I enter "loginusername" as "<Username>"
    And I enter "loginpassword" as "<Password>"
    And I click on "loginButton"
    Then Login should be "<Expected_Result>"

    Examples: 
      | Browser | Username                    | Password  | Expected_Result |
      | Mozilla | monirul.islam.ece@gmail.com | manik019  | failure         |
      | Mozilla | loadrunner.jmeter@gmail.com | pass@1234 | success         |
      | Chrome  | xxxxx                       | zxxxx     | failure         |
      | Chrome  | loadrunner.jmeter@gmail.com | pass@1234 | success         |
