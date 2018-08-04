# eWish


## Overview

eWish is electrical management system of our wishes with blockchain-related technology.


## Key features

- Leave wishes.

    - You can leave your wishes and testaments in this system. You can edit your wishes in text, but you can also attach electrical file as your wishes.

    - When creating your wishes, you can select your trusted followers, who can manage your wishes. But only you can see/edit your wishes as long as you are alive.

    - After you are gone, your followers can change electrical status of your wish. Then every followers can see your wishes.

- Hashchain management.

    - All transactions are stored in [Hashchain-Solo](https://github.com/dotnsf/hashchainsolo), blockchain-related platform. This makes our system very very very trustable.

    - When you edit/save your old wishes, those information automatically **overwrite** old information. That means only latest information can be saved( when it comes to a testaments ).


## Other Key technology components

- [Express](https://www.npmjs.com/package/express)

    - Node.js web framework

- [EJS](https://www.npmjs.com/package/ejs)

    - JavaScript UI template engine

- [Bootstrap](https://getbootstrap.com/)

    - UI Framework

- [nicEdit](http://nicedit.com/)

    - WYSIWYG Editor


## Prerequisites

- IBM Cloud account

    - You can signup IBM Cloud Lite Account for free. But in this account, you can **not** use IBM Watson NLC(Natural Language Claasifier).

- Node.js application server

    - I strongly recommend to use IBM Cloud, SDK for Node.js runtime, just because it would be very easy to setup.

- IBM Cloudant service instance

    - You can choose Lite plan of IBM Cloudant for free.

    - You do **not** need to create database for this application on IBM Cloudant. If target database would not be existed, application would recognize it need to create new one, and also create some required design documents automatically when starting.


## Setup

Under construction.


## Install

Under construction.


## Run on local server

Under construction.


## Run on IBM Cloud

Under construction.


## Create very first admin user(s)

- You need to create user(s) with admin role(user.role = 0) just after you run application server at very first time.

    - ``$ curl -XPOST -H 'Content-Type: application/json' 'http://localhost:3000/adminuser' -d '{"id":"abc@xyz.com","password":"yourpassword","name":"yourname","email":"abc@xyz.com"}'``

    - You can omit "id" if you use default value("admin").

    - You can omit "name" if you use same value of "id".

    - You can omit "email" if you use default value("admin@admin").

    - You can **NOT** omit "password".

    - You can **NOT** set role. In this API, role would be always set to 0(zero), which means administrator.

- After you create at least one admin role user(s), you can delete this REST API(POST /adminuser) from app.js


## Using web application

- Browse with your web browser.

    - For example. http://localhost:3000/

- You can view current documents without login.

- You can go administrative page from upper-right hotspot. You will be asked to login.

    - Users, who have role=0, can create/edit/delete other users.

    - All users can create/edit/delete documents and attachments.



## References

- npm - @cloudant/cloudant

    - https://www.npmjs.com/package/@cloudant/cloudant


## Licensing

This code is licensed under MIT.

https://github.com/dotnsf/ewish/blob/master/LICENSE


## Copyright

2018 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
