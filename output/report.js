$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature_Files/LogIn.feature");
formatter.feature({
  "line": 1,
  "name": "Login to salesforcee",
  "description": "",
  "id": "login-to-salesforcee",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Logging in salesforce",
  "description": "",
  "id": "login-to-salesforcee;logging-in-salesforce",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"loginusername\" as \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"loginpassword\" as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-to-salesforcee;logging-in-salesforce;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "Password",
        "Expected_Result"
      ],
      "line": 12,
      "id": "login-to-salesforcee;logging-in-salesforce;;1"
    },
    {
      "cells": [
        "Mozilla",
        "monirul.islam.ece@gmail.com",
        "manik019",
        "failure"
      ],
      "line": 13,
      "id": "login-to-salesforcee;logging-in-salesforce;;2"
    },
    {
      "cells": [
        "Mozilla",
        "loadrunner.jmeter@gmail.com",
        "pass@1234",
        "success"
      ],
      "line": 14,
      "id": "login-to-salesforcee;logging-in-salesforce;;3"
    },
    {
      "cells": [
        "Chrome",
        "xxxxx",
        "zxxxx",
        "failure"
      ],
      "line": 15,
      "id": "login-to-salesforcee;logging-in-salesforce;;4"
    },
    {
      "cells": [
        "Chrome",
        "loadrunner.jmeter@gmail.com",
        "pass@1234",
        "success"
      ],
      "line": 16,
      "id": "login-to-salesforcee;logging-in-salesforce;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Logging in salesforce",
  "description": "",
  "id": "login-to-salesforcee;logging-in-salesforce;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to \"loginURL\" on \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"loginusername\" as \"monirul.islam.ece@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"loginpassword\" as \"manik019\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login should be \"failure\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "LogIn.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 14700699378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "monirul.islam.ece@gmail.com",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 212972195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "manik019",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 56863685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogIn.I_enter(String)"
});
formatter.result({
  "duration": 1866830389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "LogIn.Then_login_should_be(String)"
});
formatter.result({
  "duration": 5396939645,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Logging in salesforce",
  "description": "",
  "id": "login-to-salesforcee;logging-in-salesforce;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to \"loginURL\" on \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"loginusername\" as \"loadrunner.jmeter@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"loginpassword\" as \"pass@1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login should be \"success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "LogIn.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 9630675767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "loadrunner.jmeter@gmail.com",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 139988906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "pass@1234",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 59123564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogIn.I_enter(String)"
});
formatter.result({
  "duration": 4751288210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LogIn.Then_login_should_be(String)"
});
formatter.result({
  "duration": 5049495750,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[success]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.salesforce.app.salesforce_login.LogIn.Then_login_should_be(LogIn.java:47)\r\n\tat ✽.Then Login should be \"success\"(Feature_Files/LogIn.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Logging in salesforce",
  "description": "",
  "id": "login-to-salesforcee;logging-in-salesforce;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"loginusername\" as \"xxxxx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"loginpassword\" as \"zxxxx\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login should be \"failure\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "LogIn.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 11263048309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "xxxxx",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 146446638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "zxxxx",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 148028647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogIn.I_enter(String)"
});
formatter.result({
  "duration": 2447604056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "LogIn.Then_login_should_be(String)"
});
formatter.result({
  "duration": 5577967480,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Logging in salesforce",
  "description": "",
  "id": "login-to-salesforcee;logging-in-salesforce;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"loginusername\" as \"loadrunner.jmeter@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"loginpassword\" as \"pass@1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login should be \"success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "LogIn.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 8617964177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "loadrunner.jmeter@gmail.com",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 388802866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "pass@1234",
      "offset": 28
    }
  ],
  "location": "LogIn.I_enter(String,String)"
});
formatter.result({
  "duration": 165016000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogIn.I_enter(String)"
});
formatter.result({
  "duration": 9988727194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LogIn.Then_login_should_be(String)"
});
formatter.result({
  "duration": 5048509968,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[success]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.salesforce.app.salesforce_login.LogIn.Then_login_should_be(LogIn.java:47)\r\n\tat ✽.Then Login should be \"success\"(Feature_Files/LogIn.feature:9)\r\n",
  "status": "failed"
});
});