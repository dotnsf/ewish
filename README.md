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


## Install & Setup

- Login to IBM Cloud, and create IBM Cloudant service instance.

- Check your service credential(username and password) of IBM Cloudant

- Git clone/download source files:

    - https://github.com/dotnsf/ewish

- Edit settings.js with you IBM Cloudant username and password

- (Optional)Edit **exports.app_port** value in settings.js to change application listening port(default 0).

- (Optional)Edit **exports.hashchain_api_url** value in settings.js to point hashchainsolo running platform.

- (Optional)Edit **exports.twitter_consumer_key** value and **exports.twitter_consumer_secret** value in settings.js to change twitter API settings.

- Install dependencies:

    - `$ npm install`

- Run

    - `$ node app`

## Using web application

- Browse with your web browser.

    - For example. http://localhost:3001/

- You can login with your twitter account from upper-right icon.

- After logging-in, you can create/edit/delete your ewishes. You can also attach file in your ewish.



## References

- npm - @cloudant/cloudant

    - https://www.npmjs.com/package/@cloudant/cloudant


## Licensing

This code is licensed under MIT.

https://github.com/dotnsf/ewish/blob/master/LICENSE


## Copyright

2018 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
