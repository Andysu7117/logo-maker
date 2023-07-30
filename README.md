# logo-maker

## Description

This application is a logo creator which creates a logo from the responses of the user for the prompts. The technologies that have been used for this application:

- Inquirer
- Nodejs
- JavaScript

  The most challenging part of the project was creating the classes for the shapes and writing them as an svg file.

## Installation

To install this application you will have to download the repository from github and runit locally from your CLI. To be able to use this project nodejs will have to be installed, this project was created using Node.js v16.20.1 which can be found [here](https://nodejs.org/en/blog/release/v16.20.1).
All the dependencies are listed in the package.json so once Node.json has been installed, you will just have to go (npm install) when you have entered into the local repository in command line.
The dependencies for this project is Inquirer at version 8.2.4, installation instruction can be found [here](https://www.npmjs.com/package/inquirer/v/8.2.4).
Jest version 28.1.3 was also used but not required to run the application, installation instruction can be found here [here](https://jestjs.io/docs/getting-started).

Once installed you can use the application by entering the repository location using your CLI. Once entered into the repository you can run the application by entering node .\index.js in the CLI.
Once run a series of prompts will be shown in the CLI. Once all the prompts have been answered a logo will be created as an svg file in the examples folder.
A video instruction of how to run the application can be found here:


https://github.com/Andysu7117/logo-maker/assets/104291853/47c176c0-6b50-4ee8-9637-858bae7c05a9


## Test

Tests have been written in shapes.test.js in the test folder using Jest. To run the test files, in your CLI you will just have to type (npm run test) like the following screenshot:
![Screenshot 2023-07-30 195432](https://github.com/Andysu7117/logo-maker/assets/104291853/606d8776-e06c-4def-ab0b-090857ed856e)
