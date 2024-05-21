Feature: webuniversity contact page

Scenario: Valid contact us form
Given I navigate to the webuniversity home page
When I click on the contact us button
And I type a first name
And I type a last name
And I type an email address
And I type a message
And I click on the submit button
Then I should see a success message

Scenario: Invalid contact us form
Given I navigate to the webuniversity home page
When I click on the contact us button
And I type a first name
And I type a last name
And I type a message
And I click on the submit button
Then I should see a error message

