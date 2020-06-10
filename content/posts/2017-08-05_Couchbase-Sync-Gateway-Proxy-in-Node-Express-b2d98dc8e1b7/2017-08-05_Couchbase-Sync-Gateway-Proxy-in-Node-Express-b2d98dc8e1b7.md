---
title: Couchbase Sync Gateway Proxy in Node/Express
description: >-
  I recently worked on a offline-first Mobile app which uses Couchbase/Sync
  Gateway and AWS Lambda as a Backend and Ionic/Angular as a…
date: '2017-08-05T13:54:48.999Z'
categories: []
keywords: []
slug: /@dhaval/couchbase-syncgateway-reverse-proxy-in-node-express-b2d98dc8e1b7
---

I recently worked on a offline-first Mobile app which uses Couchbase/Sync Gateway and AWS Lambda as a Backend and Ionic/Angular as a front-end. The Application is using PouchDB to store the data locally, sync later with server in case of network unavailability.

The app was using the standard Username/Password mechanism for the authentication and some features needed integration with 3rd party services like NodeBB and Amazon Alexa. So we decided to switch to OAuth based authentication and use [Auth0](https://auth0.com) for the user management. Auth0 is a popular (and super-cool) cloud based identity provider service.

[**Identity infrastructure, built for developers**  
_A universal identity platform for customers, employees and partners_auth0.com](https://auth0.com "https://auth0.com")[](https://auth0.com)

The PouchDB running on client side web/mobile app was using the Pouchdb-Authentication plugin which uses username/password to login with the Sync Gateway and create a sync link to push/pull data from Sync Gateway and local pouchdb.

As we don’t manage user password anymore, we decided to remove this part and instead control the communication via Token or Cookie (whichever is manageable)

[**pouchdb-community/pouchdb-authentication**  
_pouchdb-authentication - User authentication plugin for PouchDB and CouchDB._github.com](https://github.com/pouchdb-community/pouchdb-authentication "https://github.com/pouchdb-community/pouchdb-authentication")[](https://github.com/pouchdb-community/pouchdb-authentication)

After some trials and errors I end up writing a simple proxy, which utilises the Sync Gateway Admin API to create session for PouchDB and a redirect which routes all the PouchDB traffic to SG from the NodeJS.

**This is how it works internally:**

*   After successful auth0 authentication we will pass the JWT in each request
*   Before PouchDB connection is made, we will call the /sync/\_signin/userID endpoint which creates an active Session in Sync Gateway and returns the generated cookie
*   The cookie will be set on the client side
*   PouchDB connection is made to the Proxy URL, /sync

The following is the NodeJS side of code having two main routes: 1) creates Session in SG via Admin port and 2) routes all the PouchDB requests to SG.

On client side we need to create PouchDB connection with remote URL. We don’t need to use username/password anymore and the requests will pass the Cookie we stored previously.

You can download the working application from here.

[**dhavaln/auth0-pouchdb-syncgateway**  
_auth0-pouchdb-syncgateway - PouchDB to Sync Gateway communication using Auth0_github.com](https://github.com/dhavaln/auth0-pouchdb-syncgateway "https://github.com/dhavaln/auth0-pouchdb-syncgateway")[](https://github.com/dhavaln/auth0-pouchdb-syncgateway)