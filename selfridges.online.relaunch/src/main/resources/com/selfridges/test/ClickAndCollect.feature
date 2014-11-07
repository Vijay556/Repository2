Feature: Click and collect for a guest user  
   
Background: Given Im on Selfridges website   

@RunOnlyThis
Scenario Outline: Paying with different cards 'Visa credit' Paymentcard

When I searched for "<ItemNname>" and added to the basket
And being delivered to "<Title>","<Fname>","<Lname>","<Email>","<Phone>"
And I choose collection point as "<CollectionPoint>"
And I paid with payment card of "<CardType>","<CardNumber>","<NameOnCard>","<ExpMonth>","<ExpYear>","<CVV>","<BillingCountry>","<BillingPostCode>","<BillingAddressLine1>","<BillingAddressLine2>","<BillingAddressLine3>","<BillingAddressLine4>"
Then I should get an order confirmation

Examples: 
|ItemNname|CollectionPoint|Title|Fname|Lname|Email|Phone|CardType|CardNumber|NameOnCard|ExpMonth|ExpYear|CVV|BillingCountry|BillingPostCode|BillingAddressLine1|BillingAddressLine2|BillingAddressLine3|BillingAddressLine4|
|414-76027686-76875564|London|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|Visa Debit|4111111111111111|Vijayapal Kayyam|March|2015|001|India|503302|4 Cornerfield|Hatfield|Herts|UK|
#|wallets|Birmingham|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|Master Card|5555555555554444|Vijayapal Kayyam|March|2015|001|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|
#|mugs|Trafford|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|Master Card|5555555555554444|Vijayapal Kayyam|March|2015|001|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|
#|toys|ExchangeSquare|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|Master Card|5555555555554444|Vijayapal Kayyam|March|2015|001|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|