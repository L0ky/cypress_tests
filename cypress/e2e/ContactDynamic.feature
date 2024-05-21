Feature: webuniversity contact page

Scenario: Valid contact us form
Given I navigate to the webuniversity home page
When I click on the contact us button
And I type a first name "John"
And I type a last name "Doe"
And I type an email address "john.doe@email.com"
And This is a test message "test" and 42
And I click on the submit button
Then I should see a success message

Scenario: Invalid contact us form
Given I navigate to the webuniversity home page
When I click on the contact us button
And I type a first name "John"
And I type a last name "Doe"
And This is a test message "test" and 42
And I click on the submit button
Then I should see a error message

