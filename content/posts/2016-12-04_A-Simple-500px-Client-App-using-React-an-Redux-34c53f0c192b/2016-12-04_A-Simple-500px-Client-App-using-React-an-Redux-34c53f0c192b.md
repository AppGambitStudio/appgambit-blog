---
title: A Simple 500px Client App using React an Redux
description: >-
  After spending some time with React and Redux I decided to put together a
  simple app as a small side-project where I can put the things in…
date: '2016-12-04T13:21:33.197Z'
categories: []
keywords: []
slug: /@dhaval/a-simple-500px-client-app-using-react-an-redux-34c53f0c192b
---

![500px client using React+Redux](../img/1__kaJHwtIh0Tj__pgge5Xb7TA.png)
500px client using React+Redux

After spending some time with React and Redux I decided to put together a simple app as a small [side-project](https://medium.com/swlh/side-product-marketing-is-the-new-king-a75c4ed0c0c5#.1z0p64cxt) where I can put the things in perspective and see how it all fits together. So I decided to take few hours and develop a [simple 500px client](https://github.com/dhavaln/react-500px) using all I know in React.

Full source available here: [https://github.com/dhavaln/react-500px](https://github.com/dhavaln/react-500px)

> **Don’t use Redux until you have problems with vanilla React** — Dan Abramov, Creator of Redux

I followed this advise by Dan for a while before I realised that now is the time to use Redux, until this moment all the small stuff I was doing never really needed to manage a rather complex application data and distribute them across components.

> Redux is already has been explained numerous times and in many popular and understandable formats.

> So if you are not familiar with Redux yet, I highly recommend this [egghead.io](https://egghead.io) video series from the **Dan Abramov** — [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)

> (And if the above is not enough) You can use this super video series from **Wes Bos** — [https://learnredux.com/](https://learnredux.com/)

I had built [a simple boilerplate](https://github.com/dhavaln/react-redux-router-boilerplate) before which includes React, Redux, React-Router, React-Redux-Router and some basic configurations so that I can jumpstart a multi-page React app easily. I used same for the 500px client app.

### Application State

Application State basically represents the current state of application in terms of UI and Data in pure JSON format. So for this demo app I used the following state:

**_I didn’t come up with this state at the start of the application but it finally looked like this after I kept on making the changes._**

react-500px application state

As we can see, the overall application state is managed in two variables, `photos` and `detail`. I kept the structure this way so that the Home page can use the data from `photos` part and the detail page can use the data from `detail` part.

The application logic is divided into two Reducer functions which I will explain in the next section.

> The application data is not in a normalised format, as I am not editing any of the data. Probably in future applications I will explain why the application state should be in normalised way as mentioned in this article.

> [http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)

### Reducer(s)

> A Reducer is a popular Javascript function pattern, which takes in a list, a function to process each element of the list and the default initial value; and returns an accumulated value based on the output of the function. For example:

```
> [4, 5, 6].reduce(function(acc, value){    return acc + value;   }, 0)
```

\> 15

For this app I created two reducers, one for the Home page and one for the Photo Detail page. Let’s check the home page reducer function:

react-500px Home Page Reducer

(_This might be too much code to explain a simple thing_) The reducer function takes in application state and an action (usually initiated from UI) and returns the new state.

This function processes the Category Photos and Search related actions. So user can switch the Categories like Popular, Editors, Upcoming and Search through the photos from this function.

> I am using a lot of **Object.assign** statements as I try to keep my reducers a Pure Function, more detail here:

> At a fundamental level, any function that doesn’t alter input data and that doesn’t depend on external state (like a database, DOM, or global variable) and consistently provides the same output for the same input is a “pure” function.

> [https://medium.freecodecamp.com/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468#.8tj89hrrg](https://medium.freecodecamp.com/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468#.8tj89hrrg)

As we can see I have kept part of the application state in this reducer under the name of `initialState`. I found this approach easy to manage the changes, so was I inclined to keep the data needed for that reducer in the same file and I can make the changes easily without affecting any other part of the application.

Let’s check the Photo Detail reducer which helps to load and render the Photo Detail.

react-500px Photo Detail Reducer

This one is a rather simple function, which updates the received Photo Detail in state.

### Actions

The state and reducers does not operate unless there is an action to perform. Like in my app’s case, actions are: Home page is loaded, so load the default category photos, Clicking on the photo should load photo detail, etc

> Whenever an action is fired, the Redux executes all the reducers and rebuilds the new application state.

I divided the actions into photos, photo detail and photo search. I will just put the photos action here, rest two are relatively same and simple to understand:

As we can see I am exporting only `loadPhotos` as that is the only action I wanted to make visible to components and rest of the functions are used internally via Redux-Thunk (I will cover Redux middleware in separate section). It works as an Action Creator and with the help of Redux-Thunk dispatches multiple actions.

> Redux Thunk [middleware](https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md) allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch` and `getState` as parameters.

Now as I had all three important components in place, State, Reducer function and Action to initiate. I needed to make this action visible to my UI component and initiate it on a UI event.

Home is a React UI component which renders all of the photos in the photo grid. I am using the lifecycle method `componentDidMount` which fires soon after the component is loaded in the browser to initiate the photo loading action.

I am using the props to call the action, let’s check how I have injected the actions and state in this component.

Before I explain the component hierarchy, as I am using React-Router, here is the Router configuration.

The root component is App and the home (serving on /) page component is Home.

App is a wrapper component for Main, and I have injected the application state and actions to it which will be passed on to Main and other child components.

The easiest way to pass the properties to the child component is by using the `React.cloneElement(this.props.children, this.props)` in the render function.

> Though I have used the `React.cloneElement` option at the root, but for the inner components I am still passing the required properties only instead of passing all of them.

### Redux-Thunk Middleware

I started the app without the middleware configured with the Redux, as I had static data which I was using to render photos. But as soon as I integrated with 500px API, I realised that its not going to workout well without using any particular middleware mechanism.

Redux-Thunk I found simple to use and good enough for the current app. There are other options like Redux-Saga (which uses ES6 generators cleverly) but I keep that for next apps.

> This video from ReactCast explains writing custom redux middleware easily.

> [https://www.youtube.com/watch?v=T-qtHI1qHIg](https://www.youtube.com/watch?v=T-qtHI1qHIg)

Full application source available here: [https://github.com/dhavaln/react-500px](https://github.com/dhavaln/react-500px)

**Found this post useful? Kindly tap the ❤ button below! :)**