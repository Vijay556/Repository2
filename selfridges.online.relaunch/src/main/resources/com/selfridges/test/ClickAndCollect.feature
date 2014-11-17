Feature: Click and collect for a guest user  
   
Background: Given Im on Selfridges website   

@RunOnlyThis
Scenario Outline: Paying with different cards 'Visa credit' Paymentcard

When I searched for "<ItemNname>" and added to the basket
And being delivered to "<Title>","<Fname>","<Lname>","<Email>","<Phone>"
And I choose collection point as "<CollectionPoint>"
And I paid with payment card of "<CardType>","<CardNumber>","<NameOnCard>","<ExpMonth>","<ExpYear>","<CVV>","<Title>","<Fname>","<Lname>","<PhoneNumber>","<BillingCountry>","<BillingPostCode>","<BillingAddressLine1>","<BillingAddressLine2>","<BillingAddressLine3>","<BillingAddressLine4>"
Then I should get an order confirmation

Examples: 
|ItemNname|CollectionPoint|Title|Fname|Lname|Email|Phone|CardType|CardNumber|NameOnCard|ExpMonth|ExpYear|CVV|Title|Fname|Lname|PhoneNumber|BillingCountry|BillingPostCode|BillingAddressLine1|BillingAddressLine2|BillingAddressLine3|BillingAddressLine4|
#|wines|birmingham|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|visa|4111111111111111|Vijayapal Kayyam|03|2015|001|Mr|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|
|wines|London|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|American express|378282246310005|Vijayapal Kayyam|12|2015|0001|mrs|Vijay|kayyam|07769359185|India|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|
#|wines|exchange square|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|Master Card|5555555555554444|Vijayapal Kayyam|01|2018|001|miss|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|
#|wines|Trafford|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|American express|378282246310005|Vijayapal Kayyam|08|2017|001|dr|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|