$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/selfridges/test/ClickAndCollect.feature");
formatter.feature({
  "id": "click-and-collect-for-a-guest-user",
  "description": "",
  "name": "Click and collect for a guest user",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard",
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#Scenario: Paying with \u0027Visa credit\u0027 Paymentcard",
      "line": 5
    },
    {
      "value": "#When I searched for \"ties\" and added to the basket",
      "line": 7
    },
    {
      "value": "#And I choose collection point as \"London\"",
      "line": 8
    },
    {
      "value": "#And being delivered to \"Mr\", \"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
      "line": 9
    },
    {
      "value": "#And I paid with payment card of \"VISA\", \"4111111111111111\",\"Vijayapal Kayyam\",\"March\",\"2015\",\"001\",\"United Kingdom\", \"AL10 0UG\",\"4 Cornerfield\",\"Hatfield\",\"Herts\",\"UK\"",
      "line": 10
    },
    {
      "value": "#Then I should get an order confirmation",
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I searched for \"\u003cItemNname\u003e\" and added to the basket",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I choose collection point as \"\u003cCollectionPoint\u003e\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "being delivered to \"\u003cTitle\u003e\",\"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cEmail\u003e\",\"\u003cPhone\u003e\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I paid with payment card of \"\u003cCardType\u003e\",\"\u003cCardNumber\u003e\",\"\u003cNameOnCard\u003e\",\"\u003cExpMonth\u003e\",\"\u003cExpYear\u003e\",\"\u003cCVV\u003e\",\"\u003cBillingCountry\u003e\",\"\u003cBillingPostCode\u003e\",\"\u003cBillingAddressLine1\u003e\",\"\u003cBillingAddressLine2\u003e\",\"\u003cBillingAddressLine3\u003e\",\"\u003cBillingAddressLine4\u003e\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 19
});
formatter.examples({
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 21,
  "rows": [
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;1",
      "cells": [
        "ItemNname",
        "CollectionPoint",
        "Title",
        "Fname",
        "Lname",
        "Email",
        "Phone",
        "CardType",
        "CardNumber",
        "NameOnCard",
        "ExpMonth",
        "ExpYear",
        "CVV",
        "BillingCountry",
        "BillingPostCode",
        "BillingAddressLine1",
        "BillingAddressLine2",
        "BillingAddressLine3",
        "BillingAddressLine4"
      ],
      "line": 22
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;2",
      "cells": [
        "ties",
        "London",
        "Mr",
        "Vijayapal",
        "Kayyam",
        "vijay.kayyam@gmail.com",
        "07769359185",
        "Visa Debit",
        "4111111111111111",
        "Vijayapal Kayyam",
        "March",
        "2015",
        "001",
        "United Kingdom",
        "AL10 0UG",
        "4 Cornerfield",
        "Hatfield",
        "Herts",
        "UK"
      ],
      "line": 23
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;3",
      "cells": [
        "mugs",
        "London",
        "Mr",
        "Vijayapal",
        "Kayyam",
        "vijay.kayyam@gmail.com",
        "07769359185",
        "Visa Debit",
        "4111111111111111",
        "Vijayapal Kayyam",
        "March",
        "2015",
        "001",
        "United Kingdom",
        "AL10 0UG",
        "4 Cornerfield",
        "Hatfield",
        "Herts",
        "UK"
      ],
      "line": 24
    }
  ]
});
formatter.before({
  "duration": 28285701116,
  "status": "passed"
});
formatter.before({
  "duration": 1504940,
  "status": "passed"
});
formatter.before({
  "duration": 54536819,
  "status": "passed"
});
formatter.before({
  "duration": 17977424,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Given Im on Selfridges website",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.scenario({
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;2",
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I searched for \"ties\" and added to the basket",
  "keyword": "When ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ]
});
formatter.step({
  "name": "I paid with payment card of \"Visa Debit\",\"4111111111111111\",\"Vijayapal Kayyam\",\"March\",\"2015\",\"001\",\"United Kingdom\",\"AL10 0UG\",\"4 Cornerfield\",\"Hatfield\",\"Herts\",\"UK\"",
  "keyword": "And ",
  "line": 18,
  "matchedColumns": [
    17,
    16,
    18,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ]
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "arguments": [
    {
      "val": "ties",
      "offset": 16
    }
  ],
  "location": "ClickAndCollect.I_searched_for_and_added_to_the_basket(String)"
});
formatter.result({
  "duration": 22287431223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 30
    }
  ],
  "location": "ClickAndCollect.I_choose_collection_point_as(String)"
});
formatter.result({
  "duration": 12486550945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    },
    {
      "val": "Vijayapal",
      "offset": 25
    },
    {
      "val": "Kayyam",
      "offset": 37
    },
    {
      "val": "vijay.kayyam@gmail.com",
      "offset": 46
    },
    {
      "val": "07769359185",
      "offset": 71
    }
  ],
  "location": "ClickAndCollect.being_delivered_to_(String,String,String,String,String)"
});
formatter.result({
  "duration": 1009968865,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy43.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:43)\r\n\tat com.selfridges.pages.DeliveryOptionsChooseAddressPage.clickAndCollectAsGuest(DeliveryOptionsChooseAddressPage.java:163)\r\n\tat com.selfridges.test.ClickAndCollect.being_delivered_to_(ClickAndCollect.java:72)\r\n\tat ✽.And being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"(main/resources/com/selfridges/test/ClickAndCollect.feature:17)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Visa Debit",
      "offset": 29
    },
    {
      "val": "4111111111111111",
      "offset": 42
    },
    {
      "val": "Vijayapal Kayyam",
      "offset": 61
    },
    {
      "val": "March",
      "offset": 80
    },
    {
      "val": "2015",
      "offset": 88
    },
    {
      "val": "001",
      "offset": 95
    },
    {
      "val": "United Kingdom",
      "offset": 101
    },
    {
      "val": "AL10 0UG",
      "offset": 118
    },
    {
      "val": "4 Cornerfield",
      "offset": 129
    },
    {
      "val": "Hatfield",
      "offset": 145
    },
    {
      "val": "Herts",
      "offset": 156
    },
    {
      "val": "UK",
      "offset": 164
    }
  ],
  "location": "ClickAndCollect.I_paid_with_payment_card_of_(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "vijay1.I_should_get_an_order_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 880334512,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 824547813,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1257940604,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 838028577,
  "status": "passed"
});
formatter.before({
  "duration": 2801196521,
  "status": "passed"
});
formatter.before({
  "duration": 1391518,
  "status": "passed"
});
formatter.before({
  "duration": 103937791,
  "status": "passed"
});
formatter.before({
  "duration": 5577245,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Given Im on Selfridges website",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.scenario({
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;3",
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "I searched for \"mugs\" and added to the basket",
  "keyword": "When ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ]
});
formatter.step({
  "name": "I paid with payment card of \"Visa Debit\",\"4111111111111111\",\"Vijayapal Kayyam\",\"March\",\"2015\",\"001\",\"United Kingdom\",\"AL10 0UG\",\"4 Cornerfield\",\"Hatfield\",\"Herts\",\"UK\"",
  "keyword": "And ",
  "line": 18,
  "matchedColumns": [
    17,
    16,
    18,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ]
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "arguments": [
    {
      "val": "mugs",
      "offset": 16
    }
  ],
  "location": "ClickAndCollect.I_searched_for_and_added_to_the_basket(String)"
});
formatter.result({
  "duration": 19283186271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 30
    }
  ],
  "location": "ClickAndCollect.I_choose_collection_point_as(String)"
});
formatter.result({
  "duration": 8948565250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    },
    {
      "val": "Vijayapal",
      "offset": 25
    },
    {
      "val": "Kayyam",
      "offset": 37
    },
    {
      "val": "vijay.kayyam@gmail.com",
      "offset": 46
    },
    {
      "val": "07769359185",
      "offset": 71
    }
  ],
  "location": "ClickAndCollect.being_delivered_to_(String,String,String,String,String)"
});
formatter.result({
  "duration": 9574218791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Visa Debit",
      "offset": 29
    },
    {
      "val": "4111111111111111",
      "offset": 42
    },
    {
      "val": "Vijayapal Kayyam",
      "offset": 61
    },
    {
      "val": "March",
      "offset": 80
    },
    {
      "val": "2015",
      "offset": 88
    },
    {
      "val": "001",
      "offset": 95
    },
    {
      "val": "United Kingdom",
      "offset": 101
    },
    {
      "val": "AL10 0UG",
      "offset": 118
    },
    {
      "val": "4 Cornerfield",
      "offset": 129
    },
    {
      "val": "Hatfield",
      "offset": 145
    },
    {
      "val": "Herts",
      "offset": 156
    },
    {
      "val": "UK",
      "offset": 164
    }
  ],
  "location": "ClickAndCollect.I_paid_with_payment_card_of_(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 16050278178,
  "status": "passed"
});
formatter.match({
  "location": "vijay1.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 1330489490,
  "status": "passed"
});
formatter.after({
  "duration": 78222,
  "status": "passed"
});
formatter.after({
  "duration": 421283,
  "status": "passed"
});
formatter.after({
  "duration": 48051,
  "status": "passed"
});
formatter.after({
  "duration": 45257,
  "status": "passed"
});
});