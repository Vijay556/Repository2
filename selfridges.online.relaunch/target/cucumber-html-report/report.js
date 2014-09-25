$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/selfridges/test/vijay1.feature");
formatter.feature({
  "id": "buying-one-product",
  "description": " Click and Collect from different stores",
  "name": "Buying one product",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 14778378257,
  "status": "passed"
});
formatter.before({
  "duration": 8372014,
  "status": "passed"
});
formatter.before({
  "duration": 1223061,
  "status": "passed"
});
formatter.scenario({
  "id": "buying-one-product;buy-a-product-as-a-guest",
  "description": "",
  "name": "Buy a product as a guest",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "Im on Selfridges website",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I add \"ties\" to the basket",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I add \"mugs\" to the basket",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I choose collection point as \"London\" with deliver to \"Mr\", \"vijay\",\"kayyam\",\"vijay.20886@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I paid towards my product with \"411111111111111\",\"Fname Lname\",\"March\",\"2015\",\"001\",\"AL10 0UG\",\"Line1\",\"Line2\",\"Line3\",\"Line4\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "vijay1.Im_on_Selfridges_website()"
});
formatter.result({
  "duration": 486344773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ties",
      "offset": 7
    }
  ],
  "location": "vijay1.I_add_to_the_basket(String)"
});
formatter.result({
  "duration": 10252186521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mugs",
      "offset": 7
    }
  ],
  "location": "vijay1.I_add_to_the_basket(String)"
});
formatter.result({
  "duration": 8980753979,
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
  "duration": 24125413984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "411111111111111",
      "offset": 32
    },
    {
      "val": "Fname Lname",
      "offset": 50
    },
    {
      "val": "March",
      "offset": 64
    },
    {
      "val": "2015",
      "offset": 72
    },
    {
      "val": "001",
      "offset": 79
    },
    {
      "val": "AL10 0UG",
      "offset": 85
    },
    {
      "val": "Line1",
      "offset": 96
    },
    {
      "val": "Line2",
      "offset": 104
    },
    {
      "val": "Line3",
      "offset": 112
    },
    {
      "val": "Line4",
      "offset": 120
    }
  ],
  "location": "vijay1.I_paid_towards_my_product_with_(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8037836374,
  "status": "passed"
});
formatter.match({
  "location": "vijay1.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 620191,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy43.getText(Unknown Source)\r\n\tat com.selfridges.pages.OrderConfirmationPage.getOrderConfirmationNumer(OrderConfirmationPage.java:30)\r\n\tat com.selfridges.test.vijay1.I_should_get_an_order_confirmation(vijay1.java:76)\r\n\tat ✽.Then I should get an order confirmation(main/resources/com/selfridges/test/vijay1.feature:12)\r\n"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1501266501,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 834381465,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 812840739,
  "status": "passed"
});
});