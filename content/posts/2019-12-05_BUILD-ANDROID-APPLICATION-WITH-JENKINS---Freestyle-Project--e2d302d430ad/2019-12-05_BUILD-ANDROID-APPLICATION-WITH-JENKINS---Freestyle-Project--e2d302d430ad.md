---
title: BUILD ANDROID APPLICATION WITH JENKINS ( Freestyle Project)
description: >-
  Most of the organizations in the recent world are using Jenkins as a great
  tool for automating build processes, continuous integration…
date: '2019-12-05T12:04:59.759Z'
categories: []
keywords: []
slug: >-
  /@prashant_48386/build-android-application-with-jenkins-freestyle-project-e2d302d430ad
---

![](../img/1__LonqTCOyJjmg0mBzOSc__OA.png)

Most of the organizations in the recent world are using Jenkins as a great tool for automating build processes, continuous integration, and automated deployment. Jenkins helps organizations automate every aspect of the development and save the developers precious time.

In this article, we are talking about how to Build Android Application on Jenkins with Freestyle Project.

> Following this article, you can also build native as well as hybrid applications also.

### [**Setup Android SDK**](https://medium.com/@prashant_48386/setup-android-sdk-on-centos-9a420b928e35 "https://medium.com/@prashant_48386/setup-android-sdk-on-centos-9a420b928e35")

If you don't have setup Android SDK on your machine please follow this article.

[**Setup Android SDK on CentOS**  
_In this article, we are talking about how to Setup Android SDK on CentOS.I haven’t found any walk-through to setup…_medium.com](https://medium.com/@prashant_48386/setup-android-sdk-on-centos-9a420b928e35 "https://medium.com/@prashant_48386/setup-android-sdk-on-centos-9a420b928e35")[](https://medium.com/@prashant_48386/setup-android-sdk-on-centos-9a420b928e35)

### [**Setup Jenkins**](https://medium.com/appgambit/setup-jenkins-on-centos-with-docker-for-selenium-b7dba07b9ffa "https://medium.com/appgambit/setup-jenkins-on-centos-with-docker-for-selenium-b7dba07b9ffa")

If you don’t have setup Jenkins on your machine please follow this article.

[**Setup Jenkins on CentOS with Docker for Selenium**  
_I haven’t found any walk-through about setting up Jenkins on CentOS with Docker for Selenium, and since I got to do it…_medium.com](https://medium.com/appgambit/setup-jenkins-on-centos-with-docker-for-selenium-b7dba07b9ffa "https://medium.com/appgambit/setup-jenkins-on-centos-with-docker-for-selenium-b7dba07b9ffa")[](https://medium.com/appgambit/setup-jenkins-on-centos-with-docker-for-selenium-b7dba07b9ffa)

After setting up Jenkins we need to configure Android SDK on Jenkins.

#### Global Properties

Open Jenkins: **Manage Jenkins** > **Configure System** > **Global properties**. Mark “Environment variables” and add:

```
*   `ANDROID_HOME` : <Path of android-SDK directory>
*   `JAVA_HOME` : <Path of java-SDK>
```

### Create an Android build job

1.  Open `Jenkins` > **New Item >** Enter any job **name**\> Choose **Freestyle Project >** Click on **Save button**.

![](../img/1__YDByNQdY1Uv6__nf6SQpHrg.png)

**2\. Source Code Management** > Check `Git` and give Repository URL:

*   Git URL to your repo. Take this URL from Github. It should be the format of **git@github.com:{username}/{repo}.git**
*   Credentials: Select the one you created before.
*   Branches to build: `$branch`

![](../img/1__6dKabzvywpVRwR7mNEqVDA.png)

3. **Build** > Execute shell:

![](../img/1__m3L317UTSLjyRotcyu7UJQ.png)

```
chmod +x gradlew./gradlew clean./gradlew 
```

4. **Post-build Actions** > Archive artifacts: `**/*.apk`

![](../img/1__KyhGzXJ0PL9wWejGePSWmA.png)

🎊 🎉🤖🎊 🎉 Our Android app project successfully configured.

Click on **Build Now**.

Now, you can watch the progress in **Console Output**. Once the job is finished successfully, you will see the APK.

![](../img/1__yPq4____PBIVfVQJZiMVNNwA.png)

You can also integrate your build with slack using the `[Slack Notifications plugin](https://wiki.jenkins.io/display/JENKINS/Slack+Plugin).`

[**Integrating Jenkins with Slack Notifications**  
_Jenkins is an open-source continuous integration software tool written in the Java programming language for testing and…_medium.com](https://medium.com/appgambit/integrating-jenkins-with-slack-notifications-4f14d1ce9c7a "https://medium.com/appgambit/integrating-jenkins-with-slack-notifications-4f14d1ce9c7a")[](https://medium.com/appgambit/integrating-jenkins-with-slack-notifications-4f14d1ce9c7a)

And you can create a Slack trigger to run this job So you don't need to open Jenkins every time when you create the build, Just execute the slack command and your build is up and running.

[**TRIGGER JENKINS JOB FROM SLACK**  
_In my previous blog, I talked about how can we Integrate Jenkins with Slack Notifications._medium.com](https://medium.com/appgambit/trigger-jenkins-job-from-slack-5b07b6131e25 "https://medium.com/appgambit/trigger-jenkins-job-from-slack-5b07b6131e25")[](https://medium.com/appgambit/trigger-jenkins-job-from-slack-5b07b6131e25)

_Thank you for reading, if you have anything to add please send a response or add a note!_

> [https://developer.android.com/studio/build/building-cmdline](https://developer.android.com/studio/build/building-cmdline)