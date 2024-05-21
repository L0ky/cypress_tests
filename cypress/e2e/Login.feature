Feature: webuniversity login page

Scenario: Login with valid credentials
Given I navigate to the webuniversity home page
When I click on the login portal button
And I type a username '<username>'
And I type a password '<password>'
And I click on the login button
Then I should see a success login message

Scenario: Login with invalid credentials
Given I navigate to the webuniversity home page
When I click on the login portal button
And I type a username '<username>'
And I type a password '<password>'
And I click on the login button
Then I should see a error login message

Examples:
    | username | password | message |
    | webdriver  | webdriver123  | ok  |
    | webdriver  | toto  | ko  |