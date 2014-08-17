$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/selfridges/test/vijay1.feature");
formatter.feature({
  "id": "buying-one-product",
  "description": " Click and Collect from different stores",
  "name": "Buying one product",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 5947293000,
  "status": "passed"
});
formatter.before({
  "duration": 6649000,
  "status": "passed"
});
formatter.before({
  "duration": 292000,
  "status": "passed"
});
formatter.scenario({
  "id": "buying-one-product;buy-a-product-as-a-guest",
  "description": "",
  "name": "Buy a product as a guest",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario",
  "comments": [
    {
      "value": "#@ignore",
      "line": 5
    },
    {
      "value": "#Scenario: Buy a product as a guest",
      "line": 6
    },
    {
      "value": "#Given Im on Selfridges website",
      "line": 8
    },
    {
      "value": "#When I add \"mug\" to the basket",
      "line": 9
    },
    {
      "value": "#And I choose collection point as \"London\" with deliver to \"Mr\", \"vijay\",\"kayyam\",\"vijay.20886@gmail.com\",\"07769359185\"",
      "line": 10
    },
    {
      "value": "#And I paid towards my product with \"4111111111111111\",\"Fname Lname\",\"March\",\"2015\",\"001\",\"AL10 0UG\",\"Line1\",\"Line2\",\"Line3\",\"Line4\"",
      "line": 11
    },
    {
      "value": "#Then I should get an order confirmation",
      "line": 12
    }
  ]
});
formatter.step({
  "name": "Im on Selfridges website",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "I hover over \"L1_category_name\" and I selected \"L2_category\" and added a first item in the basket",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "I choose collection point as \"London\" with deliver to \"Mr\", \"vijay\",\"kayyam\",\"vijay.20886@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I paid towards my product with \"4111111111111111\",\"Fname Lname\",\"March\",\"2015\",\"001\",\"AL10 0UG\",\"Line1\",\"Line2\",\"Line3\",\"Line4\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "vijay1.Im_on_Selfridges_website()"
});
formatter.result({
  "duration": 209753000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1_category_name",
      "offset": 14
    },
    {
      "val": "L2_category",
      "offset": 48
    }
  ],
  "location": "vijay1.I_hover_over_Mens_and_I_selected_All_categories_and_added_a_first_item_in_the_basket(String,String)"
});
formatter.result({
  "duration": 4474000,
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
  "duration": 1317000,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\n\tat com.selfridges.test.vijay1.I_choose_collection_point_as_with_deliver_to_(vijay1.java:64)\n\tat ✽.And I choose collection point as \"London\" with deliver to \"Mr\", \"vijay\",\"kayyam\",\"vijay.20886@gmail.com\",\"07769359185\"(main/resources/com/selfridges/test/vijay1.feature:18)\n"
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
  "duration": 1638244000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1452781000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 593090000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "buying-one-product;buy-a-product-as-a-guest",
  "description": "",
  "name": "Buy a product as a guest",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Im on Selfridges website",
  "keyword": "Given ",
  "line": 24
});
formatter.step({
  "name": "I hover over \u003cL1_category_name\u003e and I selected \u003cL2_category\u003e and added a first item in the basket",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "I choose collection point as \"London\" with deliver to \"Mr\", \"vijay\",\"kayyam\",\"vijay.20886@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I paid towards my product with \"4111111111111111\",\"Fname Lname\",\"March\",\"2015\",\"001\",\"AL10 0UG\",\"Line1\",\"Line2\",\"Line3\",\"Line4\"",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 28
});
formatter.examples({
  "id": "buying-one-product;buy-a-product-as-a-guest;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 30,
  "rows": [
    {
      "id": "buying-one-product;buy-a-product-as-a-guest;;1",
      "cells": [
        "L1_category_name",
        "L2_category"
      ],
      "line": 31
    },
    {
      "id": "buying-one-product;buy-a-product-as-a-guest;;2",
      "cells": [
        "Mens",
        "All categories"
      ],
      "line": 32
    }
  ]
});
formatter.before({
  "duration": 1512769000,
  "status": "passed"
});
formatter.before({
  "duration": 5393000,
  "status": "passed"
});
formatter.before({
  "duration": 224000,
  "status": "passed"
});
formatter.scenario({
  "id": "buying-one-product;buy-a-product-as-a-guest;;2",
  "description": "",
  "name": "Buy a product as a guest",
  "keyword": "Scenario Outline",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "Im on Selfridges website",
  "keyword": "Given ",
  "line": 24
});
formatter.step({
  "name": "I hover over Mens and I selected All categories and added a first item in the basket",
  "keyword": "When ",
  "line": 25,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "I choose collection point as \"London\" with deliver to \"Mr\", \"vijay\",\"kayyam\",\"vijay.20886@gmail.com\",\"07769359185\"",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I paid towards my product with \"4111111111111111\",\"Fname Lname\",\"March\",\"2015\",\"001\",\"AL10 0UG\",\"Line1\",\"Line2\",\"Line3\",\"Line4\"",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 28
});
formatter.match({
  "location": "vijay1.Im_on_Selfridges_website()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "vijay1.I_should_get_an_order_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 126000,
  "status": "passed"
});
formatter.after({
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 54000,
  "status": "passed"
});
});