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
  "tags": [
    {
      "name": "@RunOnlyThis",
      "line": 5
    }
  ],
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 6,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I searched for \"\u003cItemNname\u003e\" and added to the basket",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "being delivered to \"\u003cTitle\u003e\",\"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cEmail\u003e\",\"\u003cPhone\u003e\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I choose collection point as \"\u003cCollectionPoint\u003e\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I paid with payment card of \"\u003cCardType\u003e\",\"\u003cCardNumber\u003e\",\"\u003cNameOnCard\u003e\",\"\u003cExpMonth\u003e\",\"\u003cExpYear\u003e\",\"\u003cCVV\u003e\",\"\u003cTitle\u003e\",\"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cPhoneNumber\u003e\",\"\u003cBillingCountry\u003e\",\"\u003cBillingPostCode\u003e\",\"\u003cBillingAddressLine1\u003e\",\"\u003cBillingAddressLine2\u003e\",\"\u003cBillingAddressLine3\u003e\",\"\u003cBillingAddressLine4\u003e\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 12
});
formatter.examples({
  "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 14,
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
        "Title",
        "Fname",
        "Lname",
        "PhoneNumber",
        "BillingCountry",
        "BillingPostCode",
        "BillingAddressLine1",
        "BillingAddressLine2",
        "BillingAddressLine3",
        "BillingAddressLine4"
      ],
      "line": 15
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-different-cards-\u0027visa-credit\u0027-paymentcard;;2",
      "cells": [
        "wines",
        "London",
        "Mr",
        "Vijayapal",
        "Kayyam",
        "vijay.kayyam@gmail.com",
        "07769359185",
        "American express",
        "378282246310005",
        "Vijayapal Kayyam",
        "12",
        "2015",
        "0001",
        "mrs",
        "Vijay",
        "kayyam",
        "07769359185",
        "India",
        "AL10 0UG",
        "4 Cornerfield",
        "Hatfield",
        "Herts",
        "UK"
      ],
      "line": 17,
      "comments": [
        {
          "value": "#|wines|birmingham|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|visa|4111111111111111|Vijayapal Kayyam|03|2015|001|Mr|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|",
          "line": 16
        }
      ]
    }
  ]
});
formatter.before({
  "duration": 15289293193,
  "status": "passed"
});
formatter.before({
  "duration": 38709948,
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
  "tags": [
    {
      "name": "@RunOnlyThis",
      "line": 5
    }
  ],
  "description": "",
  "name": "Paying with different cards \u0027Visa credit\u0027 Paymentcard",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario",
  "comments": [
    {
      "value": "#|wines|birmingham|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|visa|4111111111111111|Vijayapal Kayyam|03|2015|001|Mr|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|",
      "line": 16
    }
  ]
});
formatter.step({
  "name": "I searched for \"wines\" and added to the basket",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    0
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
  "name": "I choose collection point as \"London\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I paid with payment card of \"American express\",\"378282246310005\",\"Vijayapal Kayyam\",\"12\",\"2015\",\"0001\",\"Mr\",\"Vijayapal\",\"Kayyam\",\"07769359185\",\"India\",\"AL10 0UG\",\"4 Cornerfield\",\"Hatfield\",\"Herts\",\"UK\"",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    2,
    3,
    4,
    7,
    8,
    9,
    10,
    11,
    12,
    17,
    16,
    19,
    18,
    21,
    20,
    22
  ]
});
formatter.step({
  "name": "I should get an order confirmation",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "arguments": [
    {
      "val": "wines",
      "offset": 16
    }
  ],
  "location": "ClickAndCollect.I_searched_for_and_added_to_the_basket(String)"
});
formatter.result({
  "duration": 47643627891,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027actions\u0027]/button[@name\u003d\u0027addToBagButton\u0027]\"}\nCommand duration or timeout: 30.48 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.105.100.74\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nSession ID: adc3ddb6-02ad-4da6-aa7e-ed2ed2990cab\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy44.click(Unknown Source)\r\n\tat com.selfridges.pages.PDPPage.addToBag(PDPPage.java:42)\r\n\tat com.selfridges.test.ClickAndCollect.I_searched_for_and_added_to_the_basket(ClickAndCollect.java:70)\r\n\tat ✽.When I searched for \"wines\" and added to the basket(main/resources/com/selfridges/test/ClickAndCollect.feature:8)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027actions\u0027]/button[@name\u003d\u0027addToBagButton\u0027]\"}\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.105.100.74\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/DOCUME~1/850176/LOCALS~1/Temp/anonymous8534213053861980433webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8905:133)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/DOCUME~1/850176/LOCALS~1/Temp/anonymous8534213053861980433webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:396:5)\r\n"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "American express",
      "offset": 29
    },
    {
      "val": "378282246310005",
      "offset": 48
    },
    {
      "val": "Vijayapal Kayyam",
      "offset": 66
    },
    {
      "val": "12",
      "offset": 85
    },
    {
      "val": "2015",
      "offset": 90
    },
    {
      "val": "0001",
      "offset": 97
    },
    {
      "val": "Mr",
      "offset": 104
    },
    {
      "val": "Vijayapal",
      "offset": 109
    },
    {
      "val": "Kayyam",
      "offset": 121
    },
    {
      "val": "07769359185",
      "offset": 130
    },
    {
      "val": "India",
      "offset": 144
    },
    {
      "val": "AL10 0UG",
      "offset": 152
    },
    {
      "val": "4 Cornerfield",
      "offset": 163
    },
    {
      "val": "Hatfield",
      "offset": 179
    },
    {
      "val": "Herts",
      "offset": 190
    },
    {
      "val": "UK",
      "offset": 198
    }
  ],
  "location": "ClickAndCollect.I_paid_with_payment_card_of_(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClickAndCollect.I_should_get_an_order_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 23340624856,
  "status": "passed"
});
formatter.after({
  "duration": 219860,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat com.selfridges.test.Search.tearDown(Search.java:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.uri("main/resources/com/selfridges/test/Sanity.feature");
formatter.feature({
  "id": "",
  "description": "",
  "name": "",
  "keyword": "Feature",
  "line": 1
});
formatter.uri("main/resources/com/selfridges/test/Search.feature");
formatter.feature({
  "id": "verifying-the-search-functionality",
  "description": "",
  "name": "Verifying the search functionality",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results",
  "description": "",
  "name": "Searching for a term which fetches the results",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am on Selfridges website",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I enter a search term \"\u003csearch_term\u003e\" in search field",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should see search results displayed",
  "keyword": "Then ",
  "line": 7
});
formatter.examples({
  "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 9,
  "rows": [
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;1",
      "cells": [
        "search_term"
      ],
      "line": 10
    },
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;2",
      "cells": [
        "jeans"
      ],
      "line": 11
    },
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;3",
      "cells": [
        "Wines"
      ],
      "line": 12
    },
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;4",
      "cells": [
        "357-3002782-H104"
      ],
      "line": 13
    },
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;5",
      "cells": [
        "98295692"
      ],
      "line": 14
    }
  ]
});
formatter.before({
  "duration": 11229385578,
  "status": "passed"
});
formatter.before({
  "duration": 56871753,
  "status": "passed"
});
formatter.scenario({
  "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;2",
  "description": "",
  "name": "Searching for a term which fetches the results",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I am on Selfridges website",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I enter a search term \"jeans\" in search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": 