$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/selfridges/test/Search.feature");
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
  "line": 5,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am on Selfridges website",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I enter a search term \"\u003csearch_term\u003e\" in search field",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I should see seacrh results displayed",
  "keyword": "Then ",
  "line": 9
});
formatter.examples({
  "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 11,
  "rows": [
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;1",
      "cells": [
        "search_term"
      ],
      "line": 13
    },
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;2",
      "cells": [
        "jeans"
      ],
      "line": 14
    },
    {
      "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;3",
      "cells": [
        "dresses"
      ],
      "line": 15
    }
  ]
});
formatter.before({
  "duration": 13000252266,
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
  "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;2",
  "description": "",
  "name": "Searching for a term which fetches the results",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I am on Selfridges website",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I enter a search term \"jeans\" in search field",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should see seacrh results displayed",
  "keyword": "Then ",
  "line": 9
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1941298126,
  "status": "passed"
});
formatter.before({
  "duration": 10928083318,
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
  "id": "verifying-the-search-functionality;searching-for-a-term-which-fetches-the-results;;3",
  "description": "",
  "name": "Searching for a term which fetches the results",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am on Selfridges website",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I enter a search term \"dresses\" in search field",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should see seacrh results displayed",
  "keyword": "Then ",
  "line": 9
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 979842410,
  "status": "passed"
});
});