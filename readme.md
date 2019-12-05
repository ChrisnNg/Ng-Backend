# Ng-Backend
A barebones backend created with express for my [portfolio site's](https://chrisnng.github.io/Ng/) 'Contact Me' form. This code is created such that you should be able to reuse it simply by:
 
1. Installing it via 
```
npm install
```
2. Creating your own .env using the .env.example and filling it with your Gmail account information.

3. You can then hook it up to the front-end which handles posting the required information needed to compose the email. View how I connected it [here](https://github.com/ChrisnNg/Ng/blob/master/src/components/Modal.js)

#### Dependencies:
  body-parser\
  dotenv\
  express\
  nodemailer