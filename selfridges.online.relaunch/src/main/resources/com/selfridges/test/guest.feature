Feature: Guest user order placements 
   
Background: Given Im on Selfridges website   
            And I searched for "mugs" and added to the basket
            And being delivered to "Mr","Vijayapal","Kayyam","vijay.kayyam@gmail.com"
            
@RunOnlyThis
Scenario Outline: PayPal UK and International delivery 

    When I chose to deliver to "<Country>","<Postcode>","<line1>","<line2>","<line3>","<line4>","<Phone_Number>"
    And I paid using payPal with "<Paypal_Email>","<Paypal_Password>"
    Then I should get an order confirmation
    
 Examples: 
|Country|Postcode|line1|line2|line3|line4|Phone_Number|Paypal_Email|Paypal_Password|
|India|500000|H.No:104|Tadbund|Hyderabad|Telangana|07769359185|test3@selfridges.com|welcome1|
#|France|91120|66|Residence gallieni|Palaiseau|Palaiseau|07769359185|test3@selfridges.com|welcome1|
#|United Kingdom|IG3 9TS|104|line2|line3|line4|07769359185|test3@selfridges.com|welcome1|
