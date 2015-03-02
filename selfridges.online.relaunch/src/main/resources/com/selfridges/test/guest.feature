Feature: Guest user flow 
   
Background: Given Im on Selfridges website   
            When I searched for "<ItemNname>" and added to the basket
            And being delivered to "<Title>","<Fname>","<Lname>","<Email>","<Phone>"

@RunOnlyThis
Scenario Outline: Placing an order using PayPal UK and International delivery 

    When I chose to deliver to 
    And I paid with payPal with account using card of "<CardType>","<CardNumber>","<NameOnCard>","<ExpMonth>","<ExpYear>","<CVV>","<Title>","<Fname>","<Lname>","<PhoneNumber>","<BillingCountry>","<BillingPostCode>","<BillingAddressLine1>","<BillingAddressLine2>","<BillingAddressLine3>","<BillingAddressLine4>"
    Then I should get an order confirmation