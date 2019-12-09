# Ng-Backend
A barebones backend created with node.js and express for my [portfolio site's](https://chrisnng.github.io/Ng/) 'Contact Me' form. This code is created such that you should be able to reuse it simply by:
 
1. Installing it via 
```
npm install
```
2. Creating your own .env using the .env.example and filling it with your gmail account information. *updated to utilize google OAuth2. This requires going into google and creating a developer project and requesting your api keys. More information can be found elsewhere.


3. Change the targeted email account in index.js

4. You can then hook it up to the front-end which handles posting the required information needed to compose the email. View how I connected it [here](https://github.com/ChrisnNg/Ng/blob/master/src/components/Modal.js)

#### Final Product

![form](https://github.com/ChrisnNg/Ng-Backend/blob/master/assets/form.png?raw=true "Logo Title Text 1")
![email](https://github.com/ChrisnNg/Ng-Backend/blob/master/assets/email.png?raw=true "Logo Title Text 1")

#### Dependencies:
  body-parser\
  dotenv\
  express\
  nodemailer