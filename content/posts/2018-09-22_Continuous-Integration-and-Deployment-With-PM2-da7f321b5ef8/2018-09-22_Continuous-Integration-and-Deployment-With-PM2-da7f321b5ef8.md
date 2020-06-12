---
title: Continuous Integration and Deployment With PM2
description: >-
  PM2 is a Production Run-time and Process Manager tool for Node.js
  applications. It comes with a built-in Load Balancer. It allows you to…
date: '2018-09-22T15:29:41.338Z'
categories: []
keywords: []
slug: >-
  /@prashant_48386/after-rebooting-the-server-pm2-service-was-not-starting-da7f321b5ef8
---

![**P**(rocess) **M**(anager) **2**](../img/1__KE9XIVmgL5CL__pKttIj2pw.png)
**P**(rocess) **M**(anager) **2**

PM2 is a Production Run-time and Process Manager tool for Node.js applications. It comes with a built-in Load Balancer. It allows you to keep applications alive forever, to reload them without the downtime and facilitate common DevOps tasks. it works on Linux, Windows, and macOS.

### Installation

For latest PM2 stable version via NPM :

```
$ npm install pm2@latest -g
```

The simplest way to start, Monitor your application :

```
$ pm2 start <SERVER FILE>
```

PM2 supports JSON, JS, and YAML file types as the basis for the application definitions and customization. Choose your preferred one and go with it, there are no benefits to deciding for one or another.

### Configure Your Applications in a Javascript File

```
module.exports = {  apps : [{    name        : "demo-app",    script      : "./app.js",    watch       : true,    env: {      "NODE_ENV": "development",    },    env_production : {       "NODE_ENV": "production"    }  },{    name       : "demo-cluster-app",    script     : "./app.js",    instances  : 2,    exec_mode  : "cluster"  }]}
```

### Configure Your Applications in a JSON File

```
{  "apps" : [{    "name"        : "demo-app",    "script"      : "./app.js",    "watch"       : true,    "env": {      "NODE_ENV": "development"    },    "env_production" : {       "NODE_ENV": "production"    }  },{    "name"       : "demo-cluster-app",    "script"     : "./app.js",    "instances"  : 2,    "exec_mode"  : "cluster"  }]}
```

### Configure Your Applications in a YAML File

```
apps:  - script   : ./app.js    name     : 'demo-app'    instances: 2    exec_mode: cluster  - script : ./app.js    name   : 'demo-cluster-app'    watch  : true    env    :      NODE_ENV: development    env_production:      NODE_ENV: production
```

After that just run :

```
$ pm2 start app-config.js | app-config.yml | app-config.json
```

After completion of the above process we can configure our application with PM2 but default PM@ not restart automatically after the server reboot or crashed.

For this, we have to set the following configuration. Using this configuration pm2 starts our processes with our server or system init.

### Startup Script Generation

PM2 Provides INIT SYSTEM SUPPORT for following the version of OS.

> **systemd**: Ubuntu >= 16, CentOS >= 7, Arch, Debian >= 7

> **upstart**: Ubuntu <= 14

> **launchd**: Darwin, MacOSx

> **openrc**: Gentoo Linux, Arch Linux

> **rcd**: FreeBSD

> **systemv**: Centos 6, Amazon Linux

To get automatically-configured startup script for your machine we need to set run :

```
# Startup available init system
```

```
$ pm2 startup
```

```
OR# You can specify platform also
```

$ pm2 startup <platform like `ubuntu14` | `centos`\>

Output :

```
appgambit@appgambit-3:~$ pm2 startup  
\[PM2\] Init System found: systemd  
\[PM2\] To setup the Startup Script, copy/paste the following command:  
sudo env PATH=$PATH:/home/<SYSTEM NAME>/.nvm/versions/node/v6.9.1/bin /home/<SYSTEM NAME>/.nvm/versions/node/v6.9.1/lib/node\_modules/pm2/bin/pm2 startup systemd -u <SYSTEM NAME> --hp /home/<SYSTEM NAME>
```

After this, we have to save the current process list, For that run

```
$ pm2 save
```

Output :

```
\[PM2\] Saving current process list…  
\[PM2\] Successfully saved in /home/<SYSTEM NAME>/.pm2/dump.pm2
```

After that, if we want to disable this init system script then we have to set the following.


# Detect available init system


```
$ pm2 unstartup
```

If the process doesn’t start on Boot then we have to tell again pm2 to regenerate the script

```
$ pm2 startup -u nodeuser
```

_Thank you for reading, if you have anything to add please send a response or add a note!_