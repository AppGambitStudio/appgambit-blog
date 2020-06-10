---
title: React.createClass vs React.Component
description: >-
  While learning React you will quickly realise that different tutorials follow
  different writing styles, while some uses React.createClass…
date: '2016-11-13T18:30:40.151Z'
categories: []
keywords: []
slug: /@dhaval/react-createclass-vs-react-component-b4a2a6b70f05
---

![](../img/1__YGWsOmkSMLCJqB5rlBtgkw.png)

While learning React you will quickly realise that different tutorials follow different writing styles, while some uses `React.createClass` other extend the `React.Component`. I have just put some basic and common differences between two styles.

### Classic JavaScript vs ES6 JavaScript

Syntactically React.createClass is using the plain old Javascript and React.Component is using the latest ES6 class feature.

Plain JavaScript Syntax vs ES6 Syntax

### Properties and State

Each component receives the properties from parent components and may also have some local state. Both the approach has some differences in managing these values.

You can access the props same way in both the conditions, the only difference is how you define the default properties.

getDefaultProps vs setting defaultProps

As you can see in the above gist, in ES6 you can define the default properties multiple ways.

For state also, you can access it same way in both the approaches, however there is a minor difference while initialising them.

Set Initial State in Classic vs ES6 syntax

### Context Binding

Compared to others, this has to be a rather big difference. The _React.createClass_ by default binds the object context to methods, whereas for the _Component,_ we will have to bind it explicitly.

In ES6 syntax we will need to bind the context explicitly, we can do that either inside JSX or outside of it if we want to keep the JSX clean.

_Note: If you are defining_ `_constructor_`_() then you will have to call_ `_super()_` _first, otherwise the compiler will complain._