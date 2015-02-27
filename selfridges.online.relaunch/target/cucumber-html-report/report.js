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
        "birmingham",
        "Mr",
        "Vijayapal",
        "Kayyam",
        "vijay.kayyam@gmail.com",
        "07769359185",
        "visa",
        "4111111111111111",
        "Vijayapal Kayyam",
        "03",
        "2015",
        "001",
        "Mr",
        "Vijay",
        "kayyam",
        "07769359185",
        "United Kingdom",
        "AL10 0UG",
        "4 Cornerfield",
        "Hatfield",
        "Herts",
        "UK"
      ],
      "line": 16
    }
  ]
});
formatter.before({
  "duration": 55533091776,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423050962233\taddons.xpi\tDEBUG\tshutdown\r\n1423050962233\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423050962234\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423050962235\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423050962237\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423050962423\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423050962423\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423050962424\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423050962428\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423050964815\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423050964817\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423050964822\taddons.xpi\tDEBUG\tstartup\r\n1423050964823\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4303814620436716094webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423050964824\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4303814620436716094webdriver-profile\\extensions\\webdriver-staging\r\n1423050964825\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423050964825\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423050964826\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423050964826\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423050964826\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423050964827\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4303814620436716094webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423050957714,\"mt\":1423050957308}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423050964829\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423050964830\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4303814620436716094webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423050957714,\"mt\":1423050957308}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423050964832\taddons.xpi\tDEBUG\tNo changes found\r\n1423050964835\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423050964836\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423050964838\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423050964838\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423050965855\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.141.32.185\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selfridges.util.WebController.invokeBrowser(WebController.java:112)\r\n\tat com.selfridges.test.ClickAndCollect.setUp(ClickAndCollect.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host localhost on port 7055 after 45000 ms. Firefox console output:\nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423050962233\taddons.xpi\tDEBUG\tshutdown\r\n1423050962233\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423050962234\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423050962235\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423050962237\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423050962423\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423050962423\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423050962424\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423050962428\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423050964815\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423050964817\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423050964822\taddons.xpi\tDEBUG\tstartup\r\n1423050964823\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4303814620436716094webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423050964824\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4303814620436716094webdriver-profile\\extensions\\webdriver-staging\r\n1423050964825\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423050964825\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423050964826\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423050964826\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423050964826\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423050964827\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4303814620436716094webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423050957714,\"mt\":1423050957308}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423050964829\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423050964830\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4303814620436716094webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423050957714,\"mt\":1423050957308}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423050964832\taddons.xpi\tDEBUG\tNo changes found\r\n1423050964835\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423050964836\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423050964838\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423050964838\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423050965855\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\t... 32 more\r\n"
});
formatter.before({
  "duration": 51681038791,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051014689\taddons.xpi\tDEBUG\tshutdown\r\n1423051014690\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051014690\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051014691\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051014693\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051014805\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051014805\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051014805\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051014808\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051015351\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051015353\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051015357\taddons.xpi\tDEBUG\tstartup\r\n1423051015357\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4546961493278704960webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051015358\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4546961493278704960webdriver-profile\\extensions\\webdriver-staging\r\n1423051015359\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051015359\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051015359\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051015360\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051015360\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051015361\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4546961493278704960webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051012151,\"mt\":1423051011823}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051015362\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051015363\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4546961493278704960webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051012151,\"mt\":1423051011823}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051015365\taddons.xpi\tDEBUG\tNo changes found\r\n1423051015369\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051015369\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051015371\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051015371\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051016270\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.141.32.185\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selfridges.util.WebController.invokeBrowser(WebController.java:112)\r\n\tat com.selfridges.test.Search.setUp(Search.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host localhost on port 7055 after 45000 ms. Firefox console output:\nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051014689\taddons.xpi\tDEBUG\tshutdown\r\n1423051014690\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051014690\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051014691\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051014693\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051014805\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051014805\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051014805\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051014808\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051015351\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051015353\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051015357\taddons.xpi\tDEBUG\tstartup\r\n1423051015357\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4546961493278704960webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051015358\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4546961493278704960webdriver-profile\\extensions\\webdriver-staging\r\n1423051015359\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051015359\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051015359\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051015360\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051015360\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051015361\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4546961493278704960webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051012151,\"mt\":1423051011823}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051015362\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051015363\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4546961493278704960webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051012151,\"mt\":1423051011823}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051015365\taddons.xpi\tDEBUG\tNo changes found\r\n1423051015369\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051015369\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051015371\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051015371\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051016270\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\t... 32 more\r\n"
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
  "line": 16,
  "type": "scenario"
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
  "name": "I choose collection point as \"birmingham\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I paid with payment card of \"visa\",\"4111111111111111\",\"Vijayapal Kayyam\",\"03\",\"2015\",\"001\",\"Mr\",\"Vijayapal\",\"Kayyam\",\"07769359185\",\"United Kingdom\",\"AL10 0UG\",\"4 Cornerfield\",\"Hatfield\",\"Herts\",\"UK\"",
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
  "status": "skipped"
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
      "val": "birmingham",
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
      "val": "visa",
      "offset": 29
    },
    {
      "val": "4111111111111111",
      "offset": 36
    },
    {
      "val": "Vijayapal Kayyam",
      "offset": 55
    },
    {
      "val": "03",
      "offset": 74
    },
    {
      "val": "2015",
      "offset": 79
    },
    {
      "val": "001",
      "offset": 86
    },
    {
      "val": "Mr",
      "offset": 92
    },
    {
      "val": "Vijayapal",
      "offset": 97
    },
    {
      "val": "Kayyam",
      "offset": 109
    },
    {
      "val": "07769359185",
      "offset": 118
    },
    {
      "val": "United Kingdom",
      "offset": 132
    },
    {
      "val": "AL10 0UG",
      "offset": 149
    },
    {
      "val": "4 Cornerfield",
      "offset": 160
    },
    {
      "val": "Hatfield",
      "offset": 176
    },
    {
      "val": "Herts",
      "offset": 187
    },
    {
      "val": "UK",
      "offset": 195
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
formatter.after({
  "duration": 2972724,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat com.selfridges.test.ClickAndCollect.tearDown(ClickAndCollect.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.after({
  "duration": 216229,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat com.selfridges.test.Search.tearDown(Search.java:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.scenarioOutline({
  "id": "click-and-collect-for-a-guest-user;paying-with-giftcard-only",
  "description": "",
  "name": "Paying with giftcard only",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#|wines|London|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|American express|378282246310005|Vijayapal Kayyam|12|2015|0001|mrs|Vijay|kayyam|07769359185|India|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|",
      "line": 17
    },
    {
      "value": "#|wines|exchange square|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|Master Card|5555555555554444|Vijayapal Kayyam|01|2018|001|miss|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|",
      "line": 18
    },
    {
      "value": "#|wines|Trafford|Mr|Vijayapal|Kayyam|vijay.kayyam@gmail.com|07769359185|American express|378282246310005|Vijayapal Kayyam|08|2017|001|dr|Vijay|kayyam|07769359185|United Kingdom|AL10 0UG|4 Cornerfield|Hatfield|Herts|UK|",
      "line": 19
    }
  ]
});
formatter.step({
  "name": "I paid with a gift card \"\u003cGiftcard\u003e\", \"\u003cPin\u003e\"",
  "keyword": "And ",
  "line": 27,
  "comments": [
    {
      "value": "#When I searched for \"\u003cItemNname\u003e\" and added to the basket",
      "line": 24
    },
    {
      "value": "#And being delivered to \"\u003cTitle\u003e\",\"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cEmail\u003e\",\"\u003cPhone\u003e\"",
      "line": 25
    },
    {
      "value": "#And I choose collection point as \"\u003cCollectionPoint\u003e\"",
      "line": 26
    }
  ]
});
formatter.examples({
  "id": "click-and-collect-for-a-guest-user;paying-with-giftcard-only;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 30,
  "comments": [
    {
      "value": "#Then I should get an order confirmation",
      "line": 28
    }
  ],
  "rows": [
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-giftcard-only;;1",
      "cells": [
        "ItemNname",
        "CollectionPoint",
        "Title",
        "Fname",
        "Lname",
        "Email",
        "Phone",
        "Email",
        "Password"
      ],
      "line": 31
    },
    {
      "id": "click-and-collect-for-a-guest-user;paying-with-giftcard-only;;2",
      "cells": [
        "wines",
        "birmingham",
        "Mr",
        "Vijayapal",
        "Kayyam",
        "vijay.kayyam@gmail.com",
        "07769359185",
        "9826173707981682",
        "9995"
      ],
      "line": 32
    }
  ]
});
formatter.before({
  "duration": 51189944532,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051066042\taddons.xpi\tDEBUG\tshutdown\r\n1423051066043\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051066043\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051066044\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051066045\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051066184\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051066184\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051066185\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051066190\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051066794\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051066796\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051066801\taddons.xpi\tDEBUG\tstartup\r\n1423051066802\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4660984887158063923webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051066803\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4660984887158063923webdriver-profile\\extensions\\webdriver-staging\r\n1423051066804\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051066805\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051066805\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051066805\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051066806\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051066807\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4660984887158063923webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051063355,\"mt\":1423051062464}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051066809\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051066810\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4660984887158063923webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051063355,\"mt\":1423051062464}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051066813\taddons.xpi\tDEBUG\tNo changes found\r\n1423051066818\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051066819\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051066821\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051066822\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051067823\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.141.32.185\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selfridges.util.WebController.invokeBrowser(WebController.java:112)\r\n\tat com.selfridges.test.ClickAndCollect.setUp(ClickAndCollect.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host localhost on port 7055 after 45000 ms. Firefox console output:\nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051066042\taddons.xpi\tDEBUG\tshutdown\r\n1423051066043\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051066043\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051066044\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051066045\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051066184\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051066184\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051066185\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051066190\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051066794\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051066796\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051066801\taddons.xpi\tDEBUG\tstartup\r\n1423051066802\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4660984887158063923webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051066803\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous4660984887158063923webdriver-profile\\extensions\\webdriver-staging\r\n1423051066804\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051066805\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051066805\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051066805\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051066806\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051066807\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4660984887158063923webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051063355,\"mt\":1423051062464}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051066809\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051066810\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous4660984887158063923webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051063355,\"mt\":1423051062464}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051066813\taddons.xpi\tDEBUG\tNo changes found\r\n1423051066818\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051066819\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051066821\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051066822\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051067823\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\t... 32 more\r\n"
});
formatter.before({
  "duration": 51455335525,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051117173\taddons.xpi\tDEBUG\tshutdown\r\n1423051117173\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051117174\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051117175\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051117177\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051117299\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051117299\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051117299\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051117302\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051117852\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051117854\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051117857\taddons.xpi\tDEBUG\tstartup\r\n1423051117858\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous3641761239883163456webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051117858\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous3641761239883163456webdriver-profile\\extensions\\webdriver-staging\r\n1423051117859\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051117860\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051117860\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051117860\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051117861\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051117861\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous3641761239883163456webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051114027,\"mt\":1423051113824}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051117863\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051117863\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous3641761239883163456webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051114027,\"mt\":1423051113824}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051117865\taddons.xpi\tDEBUG\tNo changes found\r\n1423051117869\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051117870\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051117871\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051117871\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051118782\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.141.32.185\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selfridges.util.WebController.invokeBrowser(WebController.java:112)\r\n\tat com.selfridges.test.Search.setUp(Search.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host localhost on port 7055 after 45000 ms. Firefox console output:\nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051117173\taddons.xpi\tDEBUG\tshutdown\r\n1423051117173\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051117174\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051117175\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051117177\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051117299\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051117299\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051117299\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051117302\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051117852\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051117854\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051117857\taddons.xpi\tDEBUG\tstartup\r\n1423051117858\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous3641761239883163456webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051117858\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous3641761239883163456webdriver-profile\\extensions\\webdriver-staging\r\n1423051117859\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051117860\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051117860\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051117860\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051117861\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051117861\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous3641761239883163456webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051114027,\"mt\":1423051113824}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051117863\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051117863\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous3641761239883163456webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051114027,\"mt\":1423051113824}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051117865\taddons.xpi\tDEBUG\tNo changes found\r\n1423051117869\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051117870\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051117871\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051117871\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051118782\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\t... 32 more\r\n"
});
formatter.background({
  "description": "",
  "name": "Given Im on Selfridges website",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.scenario({
  "id": "click-and-collect-for-a-guest-user;paying-with-giftcard-only;;2",
  "description": "",
  "name": "Paying with giftcard only",
  "keyword": "Scenario Outline",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "I paid with a gift card \"\u003cGiftcard\u003e\", \"\u003cPin\u003e\"",
  "keyword": "And ",
  "line": 27,
  "comments": [
    {
      "value": "#When I searched for \"\u003cItemNname\u003e\" and added to the basket",
      "line": 24
    },
    {
      "value": "#And being delivered to \"\u003cTitle\u003e\",\"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cEmail\u003e\",\"\u003cPhone\u003e\"",
      "line": 25
    },
    {
      "value": "#And I choose collection point as \"\u003cCollectionPoint\u003e\"",
      "line": 26
    }
  ]
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 164825,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat com.selfridges.test.ClickAndCollect.tearDown(ClickAndCollect.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.after({
  "duration": 153372,
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
  "duration": 50608530134,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051168366\taddons.xpi\tDEBUG\tshutdown\r\n1423051168366\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051168366\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051168367\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051168369\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051168710\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051168710\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051168710\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051168714\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051169330\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051169332\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051169335\taddons.xpi\tDEBUG\tstartup\r\n1423051169336\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous591228275289631610webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051169336\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous591228275289631610webdriver-profile\\extensions\\webdriver-staging\r\n1423051169337\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051169337\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051169338\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051169338\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051169338\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051169339\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous591228275289631610webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051165810,\"mt\":1423051165529}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051169341\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051169341\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous591228275289631610webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051165810,\"mt\":1423051165529}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051169344\taddons.xpi\tDEBUG\tNo changes found\r\n1423051169349\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051169350\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051169352\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051169352\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051170299\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.141.32.185\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selfridges.util.WebController.invokeBrowser(WebController.java:112)\r\n\tat com.selfridges.test.ClickAndCollect.setUp(ClickAndCollect.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host localhost on port 7055 after 45000 ms. Firefox console output:\n.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051168366\taddons.xpi\tDEBUG\tshutdown\r\n1423051168366\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051168366\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051168367\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051168369\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051168710\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051168710\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051168710\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051168714\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051169330\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051169332\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051169335\taddons.xpi\tDEBUG\tstartup\r\n1423051169336\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous591228275289631610webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051169336\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous591228275289631610webdriver-profile\\extensions\\webdriver-staging\r\n1423051169337\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051169337\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051169338\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051169338\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051169338\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051169339\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous591228275289631610webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051165810,\"mt\":1423051165529}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051169341\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051169341\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous591228275289631610webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051165810,\"mt\":1423051165529}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051169344\taddons.xpi\tDEBUG\tNo changes found\r\n1423051169349\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051169350\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051169352\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051169352\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051170299\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\t... 32 more\r\n"
});
formatter.before({
  "duration": 52170965584,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051219886\taddons.xpi\tDEBUG\tshutdown\r\n1423051219886\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051219887\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051219887\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051219889\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051220028\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051220028\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051220028\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051220032\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051220605\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051220607\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051220612\taddons.xpi\tDEBUG\tstartup\r\n1423051220613\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous7896462507831375880webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051220613\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous7896462507831375880webdriver-profile\\extensions\\webdriver-staging\r\n1423051220615\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051220615\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1423051220615\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1423051220616\taddons.xpi\tINFO\tMapping {20a82645-c095-46ed-80e3-08825760534b} to C:\\WINDOWS\\Microsoft.NET\\Framework\\v3.5\\Windows Presentation Foundation\\DotNetAssistantExtension\r\n1423051220616\taddons.xpi\tDEBUG\tcheckForChanges\r\n1423051220617\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous7896462507831375880webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051217296,\"mt\":1423051217015}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051220619\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051220620\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"C:\\\\DOCUME~1\\\\850176\\\\LOCALS~1\\\\Temp\\\\anonymous7896462507831375880webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1423051217296,\"mt\":1423051217015}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"35.0.1\",\"st\":1423049000751,\"mt\":1423049000438}},\"winreg-app-global\":{\"{20a82645-c095-46ed-80e3-08825760534b}\":{\"d\":\"C:\\\\WINDOWS\\\\Microsoft.NET\\\\Framework\\\\v3.5\\\\Windows Presentation Foundation\\\\DotNetAssistantExtension\",\"e\":false,\"v\":\"0.0.0\",\"st\":1303923180140,\"mt\":1232711320000}}}\r\n1423051220623\taddons.xpi\tDEBUG\tNo changes found\r\n1423051220628\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1423051220629\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1423051220631\taddons.manager\tDEBUG\tRegistering shutdown blocker for OpenH264Provider\r\n1423051220632\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n*** Blocklist::_preloadBlocklistFile: blocklist is disabled\r\n1423051221674\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027B09669\u0027, ip: \u002710.141.32.185\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_55\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selfridges.util.WebController.invokeBrowser(WebController.java:112)\r\n\tat com.selfridges.test.Search.setUp(Search.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:108)\r\n\tat cucumber.api.cli.Main.run(Main.java:26)\r\n\tat cucumber.api.cli.Main.main(Main.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host localhost on port 7055 after 45000 ms. Firefox console output:\nager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1423051219886\taddons.xpi\tDEBUG\tshutdown\r\n1423051219886\taddons.xpi-utils\tDEBUG\tshutdown\r\n1423051219887\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1423051219887\taddons.manager\tDEBUG\tCalling shutdown blocker for OpenH264Provider\r\n1423051219889\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1423051220028\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1423051220028\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1423051220028\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1423051220032\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1423051220605\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/XPIProvider.jsm: [\"XPIProvider\"]\r\n1423051220607\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/LightweightThemeManager.jsm: [\"LightweightThemeManager\"]\r\n1423051220612\taddons.xpi\tDEBUG\tstartup\r\n1423051220613\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous7896462507831375880webdriver-profile\\extensions\\fxdriver@googlecode.com\r\n1423051220613\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\DOCUME~1\\850176\\LOCALS~1\\Temp\\anonymous7896462507831375880webdriver-profile\\extensions\\webdriver-staging\r\n1423051220615\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\r\n1423051220615\taddons.xpi\tDEBUG\tSkipping unavai