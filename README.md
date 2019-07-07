## Getting Started

    $ cd xchangerate/frontend
    $ npm install

## Running

### Development:
    $ npm start

### Production

    $ npm run build
    
After that the code is served directly from nginx

Alternatively, we can deploy this application on production through Docker. Run:

    $ docker run -it -p 8001:8000 --name xchangerate-front-end joycoding/xchangerate-front-end

Then visit **http://localhost:8001**.


## Understanding the structure

All the source code is located at **/src** and it is using ES6-7 features.

 - If running in development, it will dynamically run with webpack without the need of a build.
 - If running in production, you will first transpile the code to ES5 using `npm run build` and then you will have the compiled code stored on **/dist**. After this build process you will be able to serve those files statically directly from nginx.

