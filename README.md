Installation

1). Download or clone the NG6-starter boilerplate, and save it in a directory which will be your  project directory.

2). Install Node.js and through the installation of Node, you will have npm.  After this, navigate to your project root directory and run the following commands: 

3). Install the following global applications as follows:
    `npm install -g gulp karma karma-cli webpack`

4). Run the command `npm install` so that all the dependencies and modules in the package.js file willl be installed in bulk.


5) Run `gulp` to start the server and navigate to the localhost and port number shown to you in the terminal and you will see the app in the browser.

*** If you get an error such as :
Requiring external module babel-core/register,  create a .babelrc file in the project root directory with the following contents: 

{
  "presets": ["es2015"],
  "retainLines": true
}


Source: https://github.com/bivainis/NG6-starter-sass

