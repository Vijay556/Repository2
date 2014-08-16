$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/selfridges/test/vijay1.feature");
formatter.feature({
  "id": "buying-one-product",
  "description": " Click and Collect from different stores",
  "name": "Buying one product",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 7788571452,
  "status": "passed"
});
formatter.before({
  "duration": 1209651,
  "status": "passed"
});
formatter.before({
  "duration": 7545372,
  "status": "passed"
});
formatter.scenario({
  "id": "buying-one-product;buy-a-product-as-a-guest",
  "description": "",
  "name": "Buy a product as a guest",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "Im on Selfridges website",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I add \"mug\" to the basket",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I choose collection point as \"London\" with deliver to \"Mr\", \"vijay\",\"kayyam\",\"vijay.20886@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "I paid towards my product with \"4111111111111111\",\"Fname Lname\",\"March\",\"2015\",\"001\",\"AL10 0UG\",\"Line1\",\"Line2\",\"Line3\",\"Line4\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "location": "vijay1.Im_on_Selfridges_website()"
});
formatter.result({
  "duration": 130428309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mug",
      "offset": 7
    }
  ],
  "location": "vijay1.I_add_to_the_basket(String)"
});
formatter.result({
  "duration": 9781866969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 30
    },
    {
      "val": "Mr",
      "offset": 55
    },
    {
      "val": "vijay",
      "offset": 61
    },
    {
      "val": "kayyam",
      "offset": 69
    },
    {
      "val": "vijay.20886@gmail.com",
      "offset": 78
    },
    {
      "val": "07769359185",
      "offset": 102
    }
  ],
  "location": "vijay1.I_choose_collection_point_as_with_deliver_to_(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24220059812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4111111111111111",
      "offset": 32
    },
    {
      "val": "Fname Lname",
      "offset": 51
    },
    {
      "val": "March",
      "offset": 65
    },
    {
      "val": "2015",
      "offset": 73
    },
    {
      "val": "001",
      "offset": 80
    },
    {
      "val": "AL10 0UG",
      "offset": 86
    },
    {
      "val": "Line1",
      "offset": 97
    },
    {
      "val": "Line2",
      "offset": 105
    },
    {
      "val": "Line3",
      "offset": 113
    },
    {
      "val": "Line4",
      "offset": 121
    }
  ],
  "location": "vijay1.I_paid_towards_my_product_with_(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8499282451,
  "status": "passed"
});
formatter.match({
  "location": "vijay1.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 670197,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy43.getText(Unknown Source)\r\n\tat com.selfridges.pages.OrderConfirmationPage.getOrderConfirmationNumer(OrderConfirmationPage.java:29)\r\n\tat com.selfridges.test.vijay1.I_should_get_an_order_confirmation(vijay1.java:77)\r\n\tat ✽.Then I should get an order confirmation(main/resources/com/selfridges/test/vijay1.feature:10)\r\n"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4680815578,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 3911544624,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 3647852730,
  "status": "passed"
});
});