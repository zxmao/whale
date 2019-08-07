#### npm starting...


### 1. install npm and node

If you're using OS X or Windows, use one of the installers from the Node.js download page. Be sure to install the version labeled LTS. Other versions have not yet been tested with npm.

After installing, run 
- node -v. 

The version should be v8.9.1 or higher.

### 2. update npm

When you install node.js, npm is automatically installed. However, npm gets updated more frequently than Node.js, so be sure that you have the latest version.

To test, run 

- npm -v
- npm install npm@latest -g
- npm install node@latest -g

This will install the latest official, tested version of npm.

To install a version that will be released in the future, run:

- npm install npm@next -g