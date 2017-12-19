$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fblogin.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook application testing",
  "description": "",
  "id": "facebook-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Facebook login test",
  "description": "",
  "id": "facebook-application-testing;facebook-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email id",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "fb login was finished",
  "keyword": "And "
});
formatter.match({
  "location": "Facebook_login_stepdefinition.user_opens_facebook_login_page()"
});
formatter.result({
  "duration": 28692703502,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_login_stepdefinition.user_enters_email_id()"
});
formatter.result({
  "duration": 228320200,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_login_stepdefinition.user_enters_password()"
});
formatter.result({
  "duration": 64040186,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//input[@id\u003d\u0027passss\u0027]\"}\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:54:15.039Z\u0027\nSystem info: host: \u0027SUDHEER-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\sudheer\\AppData\\Local\\Temp\\scoped_dir4576_14222}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d62.0.3202.94, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d85e54ae810b5de036979cc71c094236\n*** Element info: {Using\u003dxpath, value\u003d.//input[@id\u003d\u0027passss\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.Facebook_login_stepdefinition.user_enters_password(Facebook_login_stepdefinition.java:33)\r\n\tat ✽.Then user enters password(fblogin.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_login_stepdefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_login_stepdefinition.fb_login_was_finished()"
});
formatter.result({
  "status": "skipped"
});
});