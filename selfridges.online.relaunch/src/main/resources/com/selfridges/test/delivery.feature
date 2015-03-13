Feature: delivery for a guest user  
   
Background: Given Im on Selfridges website   

@RunOnlyThis
Scenario Outline: Paying with different cards 'Visa credit' Paymentcard

When I searched for "<ItemNname>" and added to the basket
And being delivered to "<Title>","<Fname>","<Lname>","<Email>"
And I choose to deliver to "<Country>", "<Addressline1>", "<Addressline2>", "<Addressline3>", "<Addressline4>", "<Postcode>", "<Phone>"
And I paid with payment card of "<CardType>","<CardNumber>","<NameOnCard>","<ExpMonth>","<ExpYear>","<CVV>","<Title>","<Fname>","<Lname>","<PhoneNumber>","<BillingCountry>","<BillingPostCode>","<BillingAddressLine1>","<BillingAddressLine2>","<BillingAddressLine3>","<BillingAddressLine4>"
Then I should get an order confirmation

Examples: 
|ItemNname|Country|Addressline1|Addressline2|Addressline3|Addressline4|Postcode|Title|Fname|Lname|Email|Phone|CardType|CardNumber|NameOnCard|ExpMonth|ExpYear|CVV|Title|Fname|Lname|PhoneNumber|BillingCountry|BillingPostCode|BillingAddressLine1|BillingAddressLine2|BillingAddressLine3|BillingAddressLine4|
|Wines|India|H.No:100|Secunderabad|Hyderabad|Telangana|503302|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|visa|4111111111111111|Vijayapal Kayyam|03|2015|001|Mr|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|
