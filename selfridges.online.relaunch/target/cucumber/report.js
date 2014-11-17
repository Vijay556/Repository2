$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/com/selfridges/test/ClickAndCollect.feature");
formatter.feature({
  "id": "click-and-collect-for-a-guest-user",
  "description": "",
  "name": "Click and collect for a guest user",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 9241064437,
  "status": "passed"
});
formatter.before({
  "duration": 135396538,
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
  "duration": 9547093555,
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
  "duration": 13155869531,
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
  "duration": 3519930605,
  "status": "passed"
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
  "duration": 22034092601,
  "status": "passed"
});
formatter.match({
  "location": "ClickAndCollect.I_should_get_an_order_confirmation()"
});
formatter.result({
  "duration": 30159306002,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027orderDetails\u0027]/div[2]/span[2]\"}\nCommand duration or timeout: 30.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.105.96.172\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nSession ID: 6bf5c532-1f23-4922-9335-31e5f69f7c46\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.selfridges.pages.CheckoutOrderConfirmationTab.getOrderConfirmationNumer(CheckoutOrderConfirmationTab.java:29)\r\n\tat com.selfridges.test.ClickAndCollect.I_should_get_an_order_confirmation(ClickAndCollect.java:107)\r\n\tat ✽.Then I should get an order confirmation(src/main/resources/com/selfridges/test/ClickAndCollect.feature:12)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027orderDetails\u0027]/div[2]/span[2]\"}\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.105.96.172\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/DOCUME~1/850176/LOCALS~1/Temp/anonymous4711629614131770389webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8905:133)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/DOCUME~1/850176/LOCALS~1/Temp/anonymous4711629614131770389webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:396:5)\r\n"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1699330781,
  "status": "passed"
});
formatter.after({
  "duration": 196393,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat com.selfridges.test.ClickAndCollect.tearDown(ClickAndCollect.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
});