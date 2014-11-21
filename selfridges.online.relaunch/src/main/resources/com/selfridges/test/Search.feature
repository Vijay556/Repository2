Feature: Verifying the search functionality

Scenario Outline: Searching for a term which fetches the results

Given  I am on Selfridges website
When I enter a search term "<search_term>" in search field
Then I should see search results displayed

Examples: 
|search_term|
|jeans|
|Wines|
|357-3002782-H104|
|98295692|

Scenario Outline: Searching for a term which fetches no results

Given  I am on Selfridges website
When I enter a search term "<search_term>" in search field
Then I should see no search results with "<search_term>" displayed

Examples: 
|search_term|
|xfgbxfgfhdfgdfgdfg|
|jeans|

Scenario: Verify Recently viewed items section exist or not
Given  I am on Selfridges website
When I enter a search term "aabbccddeeff" in search field
Then I should see no search results with "aabbccddeeff" displayed
And I should not see recently viewed items section displayed
When I clear existing term from search field and I searched for a new product "wallets"
And I navigated to PDP of the first product
And I enter a search term "aabbccddeeff" in search field
Then I should see recently viewed items section displayed

