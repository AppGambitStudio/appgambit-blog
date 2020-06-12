---
title: Getting started with Protractor — end-to-end testing
description: >-
  Protractor is an end-to-end testing framework for AngularJS applications and
  works as a solution integrator — combining powerful tools and…
date: '2019-05-01T08:32:16.761Z'
categories: []
keywords: []
slug: >-
  /@prashant_48386/getting-started-with-protractor-end-to-end-testing-68d58d7be485
---

![](../img/1__co5Kbf2ft506QaeoZ1tpXw.jpeg)

**Protractor** is an end-to-end testing framework for AngularJS applications and works as a solution integrator — combining powerful tools and technologies such as NodeJS, Selenium, web driver, **Jasmine**, Cucumber and Mocha. It has a bunch of customizations from Selenium to easily create tests for AngularJS applications.

Protractor runs tests against your application in a real browser, interacting with it as a user would.

By default, Protractor uses the [Jasmine](http://jasmine.github.io/) test framework for its testing interface.

#### Setup Protractor

Protractor support [**Node.js**](https://nodejs.org/en/).To run, you will need to have Node.js installed. You will download the Protractor package using [**npm**](https://www.npmjs.com/), which comes with Node.js. Check the version of Node.js you have by running `node --version`. Then, check the [compatibility notes](https://github.com/angular/protractor#compatibility) in the Protractor README to make sure your version of Node.js is compatible with Protractor.

Protractor user selenium server to control browser that’s why we need **Java Development Kit (JDK)**

For Selenium please refer my previous article

[**Configure Selenium Grid with Docker**  
_In my previous post, I went through the process of setting up Jenkins on CentOS. Today I worked through setting up…_medium.com](https://medium.com/appgambit/configure-selenium-grid-in-docker-45a377ab233b "https://medium.com/appgambit/configure-selenium-grid-in-docker-45a377ab233b")[](https://medium.com/appgambit/configure-selenium-grid-in-docker-45a377ab233b)

*   Install Protractor with `-g` Globally

```
npm install -g protractor
```

*   Now try to run below command it will return protractor version

protractor --version

*   webdriver-manager is a helper tool to get an instance selenium server and download necessary libraries.

```
webdriver-manager update
```

*   Start server with

```
webdriver-manager start
```

After running this command you can check status about the server here `[http://localhost:4444/wd/hub](http://localhost:4444/wd/hub)`.

*   4444 is a default port for selenium standalone server but you can change using this.

webdriver-manager start — seleniumPort XXXX

Now, we are able to cook :) our protractor script.

Protractor needs two files to run,

*   spec file
*   configuration file.

Let's start our first protractor demo.

This is the configuration file of protractor could `protractor.conf.js` this is the root file of the protractor.

The configuration file tells protractor to

*   where your spec file,
*   Where your selenium server address ( `seleniumAddress` , by default it’s `http://localhost:4444/wd/hub`)
*   which browser you want to invoke(The default browser is Chrome),
*   which reporter tool you are using for reporting purposes.
*   you can set baseURL in `conf.js file` using

```
 "remote": {     "baseUrl": "https://my.prodapp.test.com/"  }
```

*   we can specify the multi-browser capability also using

multiCapabilities: \[{  
    'browserName': 'chrome'  
},   
{  
    'browserName': 'firefox'  
}\],

*   you can specify which framework you are using for your test execution

framework: ‘jasmine’,

*   You can specify `spec` patterns that are relative to the current working directory

//All spec file execution  
specs: \[‘e2e/\*spec.js’\],

//Specific spec file execution  
specs: \["1\_Login.js",  
        "2\_Add\_Client.js",  
        "3\_Update\_Client.js"  
\],

Now our protractor is configured let’s create some `spec` files.

You can copy both `.spec` file and paste it inside /e2e/ directory.

Here we go Now we are able to run our first protractor script. 🎌 🎌 🎌

Run our test with:

```
protractor 
```

It will execute your test on chrome browser and run all tests like.

*   redirect to the given URL.
*   automatically **log in** to the application.
*   redirect to the **Home** screen.
*   Click on **Leave** menu and redirect to **Leave** screen.

In my next article, we will see more about **Locators, Reporters, Screenshot and Log file.**

_Thank you for reading, if you have anything to add please send a response or add a note!_