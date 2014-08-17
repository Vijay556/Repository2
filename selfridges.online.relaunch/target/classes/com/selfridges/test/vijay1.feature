Feature: Buying one product
   Click and Collect from different stores
   
   
#@ignore
#Scenario: Buy a product as a guest

#Given Im on Selfridges website
#When I add "mug" to the basket
#And I choose collection point as "London" with deliver to "Mr", "vijay","kayyam","vijay.20886@gmail.com","07769359185"
#And I paid towards my product with "4111111111111111","Fname Lname","March","2015","001","AL10 0UG","Line1","Line2","Line3","Line4"
#Then I should get an order confirmation

Scenario: Buy a product as a guest

Given Im on Selfridges website
When I hover over "L1_category_name" and I selected "L2_category" and added a first item in the basket
And I choose collection point as "London" with deliver to "Mr", "vijay","kayyam","vijay.20886@gmail.com","07769359185"
And I paid towards my product with "4111111111111111","Fname Lname","March","2015","001","AL10 0UG","Line1","Line2","Line3","Line4"
Then I should get an order confirmation

Scenario Outline: Buy a product as a guest

Given Im on Selfridges website
When I hover over <L1_category_name> and I selected <L2_category> and added a first item in the basket
And I choose collection point as "London" with deliver to "Mr", "vijay","kayyam","vijay.20886@gmail.com","07769359185"
And I paid towards my product with "4111111111111111","Fname Lname","March","2015","001","AL10 0UG","Line1","Line2","Line3","Line4"
Then I should get an order confirmation

Examples:
    | L1_category_name | L2_category      |
    |  Mens            |  All categories  |
