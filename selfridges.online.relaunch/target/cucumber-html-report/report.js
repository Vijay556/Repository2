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
  "line": 5,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I searched for \"\u003cItemNname\u003e\" and added to the basket",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I choose collection point as \"\u003cCollectionPoint\u003e\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "being delivered to \"\u003cTitle\u003e\",\"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cEmail\u003e\",\"\u003cPhone\u003e\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I paid with payment card of \"\u003cCardType\u003e\",\"\u003cCardNumber\u003e\",\"\u003cNameOnCard\u003e\",\"\u003cExpMonth\u003e\",\"\u003cExpYear\u003e\",\"\u003cCVV\u003e\",\"\u003cBillingCountry\u003e\",\"\u003cBillingPostCode\u003e\",\"\u003cBillingAddressLine1\u003e\",\"\u003cBillingAddressLine2\u003e\",\"\u003cBillingAddressLine3\u003e\",\"\u003cBillingAddressLine4\u003e\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 11
});
formatter.examples({
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 13,
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
      "line": 14
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;2",
      "cells": [
        "wine",
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
        "India",
        "503302",
        "4 Cornerfield",
        "Hatfield",
        "Herts",
        "UK"
      ],
      "line": 15
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;3",
      "cells": [
        "wallets",
        "London",
        "Mr",
        "Vijayapal",
        "Kayyam",
        "vijay.kayyam@gmail.com",
        "07769359185",
        "Master Card",
        "5555555555554444",
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
      "line": 16
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;4",
      "cells": [
        "pens",
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
      "line": 17
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;5",
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
      "line": 18
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;6",
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
      "line": 19
    }
  ]
});
formatter.before({
  "duration": 10723049997,
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
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I searched for \"wine\" and added to the basket",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ]
});
formatter.step({
  "name": "I paid with payment card of \"Visa Debit\",\"4111111111111111\",\"Vijayapal Kayyam\",\"March\",\"2015\",\"001\",\"India\",\"503302\",\"4 Cornerfield\",\"Hatfield\",\"Herts\",\"UK\"",
  "keyword": "And ",
  "line": 10,
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
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "wine",
      "offset": 16
    }
  ],
  "location": "ClickAndCollect.I_searched_for_and_added_to_the_basket(String)"
});
formatter.result({
  "duration": 8675815781,
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
  "duration": 9675660454,
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
  "duration": 7517189196,
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
      "val": "India",
      "offset": 101
    },
    {
      "val": "503302",
      "offset": 109
    },
    {
      "val": "4 Cornerfield",
      "offset": 118
    },
    {
      "val": "Hatfield",
      "offset": 134
    },
    {
      "val": "Herts",
      "offset": 145
    },
    {
      "val": "UK",
      "offset": 153
    }
  ],
  "location": "ClickAndCollect.I_paid_with_payment_card_of_(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 17457729125,
  "status": "passed"
});
formatter.match({
  "location": "ClickAndCollect.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 1089183402,
  "status": "passed"
});
formatter.after({
  "duration": 637739433,
  "status": "passed"
});
formatter.before({
  "duration": 8730258454,
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
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I searched for \"wallets\" and added to the basket",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ]
});
formatter.step({
  "name": "I paid with payment card of \"Master Card\",\"5555555555554444\",\"Vijayapal Kayyam\",\"March\",\"2015\",\"001\",\"United Kingdom\",\"AL10 0UG\",\"4 Cornerfield\",\"Hatfield\",\"Herts\",\"UK\"",
  "keyword": "And ",
  "line": 10,
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
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "wallets",
      "offset": 16
    }
  ],
  "location": "ClickAndCollect.I_searched_for_and_added_to_the_basket(String)"
});
formatter.result({
  "duration": 8709150744,
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
  "duration": 8631411255,
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
  "duration": 7668439425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master Card",
      "offset": 29
    },
    {
      "val": "5555555555554444",
      "offset": 43
    },
    {
      "val": "Vijayapal Kayyam",
      "offset": 62
    },
    {
      "val": "March",
      "offset": 81
    },
    {
      "val": "2015",
      "offset": 89
    },
    {
      "val": "001",
      "offset": 96
    },
    {
      "val": "United Kingdom",
      "offset": 102
    },
    {
      "val": "AL10 0UG",
      "offset": 119
    },
    {
      "val": "4 Cornerfield",
      "offset": 130
    },
    {
      "val": "Hatfield",
      "offset": 146
    },
    {
      "val": "Herts",
      "offset": 157
    },
    {
      "val": "UK",
      "offset": 165
    }
  ],
  "location": "ClickAndCollect.I_paid_with_payment_card_of_(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 17651423574,
  "status": "passed"
});
formatter.match({
  "location": "ClickAndCollect.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 878766156,
  "status": "passed"
});
formatter.after({
  "duration": 592076367,
  "status": "passed"
});
formatter.before({
  "duration": 8475790079,
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
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;4",
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I searched for \"pens\" and added to the basket",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 9,
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
  "line": 10,
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
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "pens",
      "offset": 16
    }
  ],
  "location": "ClickAndCollect.I_searched_for_and_added_to_the_basket(String)"
});
formatter.result({
  "duration": 9406608102,
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
  "duration": 9784027578,
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
  "duration": 7305115036,
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
  "duration": 15749783282,
  "status": "passed"
});
formatter.match({
  "location": "ClickAndCollect.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 691267186,
  "status": "passed"
});
formatter.after({
  "duration": 593735237,
  "status": "passed"
});
formatter.before({
  "duration": 10825956651,
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
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;5",
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I searched for \"ties\" and added to the basket",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 9,
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
  "line": 10,
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
  "line": 11
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
  "duration": 9924016321,
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
  "duration": 12513646287,
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
  "duration": 7461999779,
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
  "duration": 21878169152,
  "status": "passed"
});
formatter.match({
  "location": "ClickAndCollect.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 978847312,
  "status": "passed"
});
formatter.after({
  "duration": 882623629,
  "status": "passed"
});
formatter.before({
  "duration": 10211455087,
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
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;6",
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I searched for \"mugs\" and added to the basket",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "being delivered to \"Mr\",\"Vijayapal\",\"Kayyam\",\"vijay.kayyam@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 9,
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
  "line": 10,
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
  "line": 11
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
  "duration": 10860179436,
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
  "duration": 11913486491,
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
  "duration": 7753493811,
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
  "duration": 18042144741,
  "status": "passed"
});
formatter.match({
  "location": "ClickAndCollect.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 513921183,
  "status": "passed"
});
formatter.after({
  "duration": 617523177,
  "status": "passed"
});
});