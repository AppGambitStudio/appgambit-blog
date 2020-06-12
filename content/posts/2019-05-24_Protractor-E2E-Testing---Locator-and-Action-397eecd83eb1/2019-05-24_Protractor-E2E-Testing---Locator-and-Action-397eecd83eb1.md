---
title: Protractor E2E Testing — Locator and Action
description: >-
  We talked about protractor and how to setup protractor in my previous article.
  Today we will gonna talk about what is Locator and Action…
date: '2019-05-24T09:23:38.288Z'
categories: []
keywords: []
slug: /@prashant_48386/protractor-e2e-testing-locator-and-action-397eecd83eb1
---

![](../img/1__uB____GnAp__r7sKTC7WvZ0Jg.png)

We talked about protractor and how to setup protractor in my previous article. Today we will gonna talk about what is _Locator_ and _Action_ in protractor.

[**Getting started with Protractor — end-to-end testing**  
_Protractor is an end-to-end testing framework for AngularJS applications and works as a solution integrator — combining…_medium.com](https://medium.com/appgambit/getting-started-with-protractor-end-to-end-testing-68d58d7be485 "https://medium.com/appgambit/getting-started-with-protractor-end-to-end-testing-68d58d7be485")[](https://medium.com/appgambit/getting-started-with-protractor-end-to-end-testing-68d58d7be485)

Protractor exports a global function `element`, which takes a _Locator_ and will return an _Element Finder._

The _Element Finder_ has a set of _action methods_, such as `click()`, `getText()` and `sendKeys` that we are discussing in the next article.

#### Locators from Protractor

Protractor give some extra locators that are could as a Protractor-specific locator like,

#### Here we go for a detail view of each locator

#### — Specific to `element`

*   By.model(): Model locator checks whether any element has ng-model values matching with a given locator if so that element will be returned

```
//HTML code<span ng-model="person.name"></span>
```

```
// usage of locatorelement(by.model('person.name'));
```

*   By.binding(): _Find an element by text binding, binding locator finds the element based on a partial match of the ng-bind attribute, if the attribute has some value matching with given locator then this element will be found by our locator_

```
//HTML code<span ng-bind="person.email.id"></span>
```

```
// usage of locatorelement(by.binding('person.email'));
```

*   By.exactBinding(): _Finds the element with an exact value, if ng-bind is equal to the given locator value then the element will be found. It will not check for partial matches._

```
//HTML code<span ng-bind="person.email.id"></span> // this will not be found as it is not exact value<span ng-bind="person.email"></span> // this element will be found as it is exach match
```

```
// usage of locatorelement(by.binding('person.email'));
```

*   By.buttonText(): _buttonText locator will try to match with an element which as same text as the given locator, or its sub-element inside the button tag_

```
//HTML code<button>Save</button>// usage of locatorelement(by.buttonText('Save'));//HTML code<button>	<label>Save As   //matches	</label></button>
```

```
// usage of locatorelement(by.buttonText('Save As'));
```

*   By.partialButtonText() : _partialButtonText locator tries to find element with partial match present in the button element’s text._

```
//HTML code<button>Save As Text </button>  //matches// usage of locatorelement(by.buttonText('Save'));//HTML code<button>	<label>Save As File  //matches	</label></button>
```

```
// usage of locatorelement(by.buttonText('Save As'));
```

*   By.cssContainingText() : _cssContainingText locator tries to find elements by CSS which contain a certain string._

```
<ul>  <li class="pet">Dog</li>  //matches  <li class="pet">Cat</li></ul>
```

```
// Returns the li for the dog, but not cat.element(by.cssContainingText('.pet', 'Dog'))
```

*   By.repeater() : Find elements inside an ng-repeat.

```
<div ng-repeat="books in list">  
  <span>{{book.name}}</span>  
  <span>{{book.price}}</span>  
</div>
// usage of locatorelement(by.repeater('


//This is also using with element.all  
element.all(by.repeater('`books in list`'))

*   By.exactRepeater(): by.exactRepeater will full value of the ng-repeat. The full value does not include any filters applied.

<div ng-repeat="books in list">  
  <span>{{book.name}}</span>  
  <span>{{book.price}}</span>  
</div>

element(by.exactRepeater('books in list')

#### — Specific to `element.all`

*   By.deepCss() : _Find an element by CSS selector within the Shadow DOM._

<div>  <span id="outerspan">  <"shadow tree">	<span id="span1"></span>	<"shadow tree">	  <span id="span2"></span>	</>  </></div>

var spans = element.all(by.deepCss('span'));expect(spans.count()).toEqual(3);
```

*   By.options():

```
<select ng-model="color" ng-options="c for c in colors">  <option value="0" selected="selected">red</option>  <option value="1">green</option></select>
```

```
var allOptions = element.all(by.options('c for c in colors'));expect(allOptions.count()).toEqual(2);var firstOption = allOptions.first();expect(firstOption.getText()).toEqual('red');
```

For a list of Protractor-specific locators, check this out [protractorBy](https://www.protractortest.org/#/api?view=ProtractorBy).

#### Locators from webdriver

Below locators are available in protractor as inherited locators, these locators are derived from selenium.

```
<html>   <body>      <div id="pancakes">	  <a href="https://chercher.tech" >Selenium Webdriver</a>	  <button id="firstButton" type="button">             Blueberry          </button>	  <button type="button" name="Ban" class="Banana">             Banana           </button>	  <button type="button" name="cake" value="Strawberry">             Strawberry          </button>       </div>    </body></html>
```

*   By._id():_

The Id locator looks for an element in the page having an id attribute

```
element(by.id("firstButton")
```

*   By._name():_

The name locator looks for an element on the page that has a name attribute.

```
element(by.name("Ban")
```

*   By._className():_

The Class name locator looks for an element on the page that has a class attribute.

```
element(by.className("banana")
```

*   By._tagName():_

The tag name locator looks for an element in the page having an tag name, like `<a>, <button>, <p>, <label>, <div>` etc

```
element(by.tagname("button")
```

*   By._partialLinkText():_

In some situations, we may need to find links by a portion of the text in a Link Text element. it contains. In such situations, we use Partial Link Text to locate elements.

```
element(by.partialLinkText("Selenium")
```

*   By._linkText():_

The link text finds the element based on the text present in tag, text highlighted in the below image.

If there are multiple elements with the same link text then the first one will be selected. This Link Text locator works only on links (hyperlinks) so it is called as Link Text locator.

```
element(by.linkText("Selenium Webdriver")
```

*   By._CSS():_

CSS Selector is the combination of an element selector and a selector value that identifies the web element within a web page. The composite of an element selector and selector value is known as the Selector Pattern.

When we don’t have an option to choose Id or Name, we should prefer using CSS locators as the best alternative. Read how to [build CSS Selector in Protractor](https://chercher.tech/protractor/css-selector-protractor "css selector in selenium")

```
element(by.css("#firstButton")
```

*   By._XPath():_

While DOM is the recognized standard for navigation through an HTML element tree, XPath is the standard navigation tool for XML also we can use it for HTML; and an HTML document is also an XML document (XHTML).

XPath is used everywhere where there is XML.

```
element(by.xpath("//button[@name="Ban"]")
```

In my next article, we will see more about **Reporters, Screenshot and Log file.**

_Thank you for reading, if you have anything to add please send a response or add a note!_