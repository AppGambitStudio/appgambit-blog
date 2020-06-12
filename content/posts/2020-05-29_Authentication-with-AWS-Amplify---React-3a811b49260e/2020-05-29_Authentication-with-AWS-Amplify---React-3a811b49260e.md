---
title: Authentication with AWS Amplify & React
description: how to authenticate
date: '2020-05-29T10:14:30.349Z'
categories: []
keywords: []
slug: /@ladumorrahul/authentication-with-aws-amplify-react-3a811b49260e
---

![](../img/1__iBZ44H9aF6ewsv6fmbJG6A.jpeg)

### What is Amplify?

[https://docs.amplify.aws/start/q/integration/js](https://docs.amplify.aws/start/q/integration/js)

### Basic Setup

**First, if you don’t have Node yet, download and install it.**

Open [https://nodejs.org/en/download](https://nodejs.org/en/download)

#### You will also need an AWS account to run Amplify. Create your AWS account if you don’t have one yet.

### Amplify

Now, with the basic setup completed, let’s begin.

### Install the Amplify CLI

The Amplify Command Line Interface (CLI) is a unified toolchain to create, integrate, and manage the AWS cloud services for your app.

`$ sudo npm install -g @aws-amplify/cli`

### Configure Amplify

Sign In to your AWS account and run:

`$ sudo npm install -g @aws-amplify/cli`

Press Enter, Specify the Aws region, username, and Enter again.

`amplify configure`

Follow these steps to set up access to your AWS account: Sign in to your AWS administrator account: [https://console.aws.amazon.com/](https://console.aws.amazon.com/)

```
Press Enter to continueSpecify the AWS Region? region: eu-west-2Specify the username of the new IAM user:? user name: amplify-user
```

Complete the user creation using the AWS console  
[https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-7T7mt&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess](https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-7T7mt&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess)

Press Enter to continue

_C_omplete the AWS Amplify user creation, download the credentials, and add the remaining information in the terminal:

Scanning for plugins…

Plugin scan successful

Follow these steps to set up access to your AWS account:

```
Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue
Specify the AWS Region region : eu-west-2
Specify the username of the new IAM user:
user name: amplify-user
```

Complete the user creation

Press Enter to continue

```
Enter the access key of the newly created user:
secretAccessKey :
```

This would update/create the AWS Profile in your local machine Profile Name: amplify Successfully set up the new user.

### Configure your React app

Let’s install AWS Amplify packages in our React app: $ sudo npm install aws-amplify @aws-amplify/ui-react

### Authentication

Let’s proceed and add authentication to the app.

Authentication in Amplify uses Amazon Cognito. $ amplify add auth Make the selections below or according to your config:

```
Do you want to use the default authentication and security configuration? Defailt configurationHow do you want to be able to sign in ? EmailDo you want to configure advanced setting? NO, I am done
```

This command will walk us through a series of questions. Each question is configuring the authentication for our application. If you are unsure what configuration you need, go ahead and select Yes, use the default configuration for the first question. You can always come back and reconfigure these settings by running the command amplify update auth. We now have the authentication module configured for our application. But, we still need to deploy this configuration to our AWS account. Lucky for us, this is handled by the Amplify CLI as well. Let’s push the configuration to the cloud with the command below:

```
$ amplify push
```

Are you sure want to continue? YES

This will create and deploy the necessary changes to our AWS account to support our authentication module. A configuration file called aws-exports.js will be copied to your configured source directory, for example, ./src.

Configure Amplify in the React app Now, let’s add the Amplify auth service to our React app. Open your favorite IDE and edit the index.js file:

```
import React from 'react';    import ReactDOM from 'react-dom';    import './index.css';    import App from './App';    import * as serviceWorker from './serviceWorker';    import Amplify from 'aws-amplify';    import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById('root'));    serviceWorker.unregister();
```


Next, add the Amplify Authenticator to your App.js file:    

```
import React from "react";import "./App.css";import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
function App() {  return (    <div>      <AmplifySignOut />      

export default withAuthenticator(App, true);
```

Now, we are ready to test the app. Run the application using:

`$npm run start`

Your browser will load with a secure page to sign in. Your app is now protected with Amplify.

Keep learning..