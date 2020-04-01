# Automation Testing! :boom:

Welcome! This is a short automation test project using **WebdriverIO**.

**NOTE**: If you still see this note it means that this project isn't 100% complete, which means that I'll be improving this project during the next couple days :monkey:

# Description :pencil2:

I'm doing this project in order to refresh what I have learned the past weeks in Enroute. I think this is the best way to do it as just reading gets boring :smile:.

During this project I'll be using WebDriverIO, CSS,HTML and JS Automating Front-End Testing.

# Technoglies :wrench:

The project uses:

- **WebDriverIO**
- **NodeJS**
- **Mocha**
- **Chai**
- **HTML**
- **CSS**

# Installation Guide :pencil:

To setup the project:

1. Clone or download the repository
2. Open your terminal/workspace
   > **Note:** _I recommend using VSCode and Live Server Extension_
3. Run the following command in order to install all the dependencies needed (node_modules):
   > **Note:** _Make sure your are on the right path and have the package.json file_

```sh
$ npm install
```

4. Go to the superHeroApp folder. You will find a file named: _index.html_. Open this file with Live Server.
5. Check the port you are listening to. On my computer by default I set the port to 5500. However certainly it won't your case.
6. If you are listing to another port you need to change the following line:

   > _baseUrl:'http://localhost:5500/WDIO/superHeroApp/index.html',_

   You can find this line in the **wdio.conf.js** file, just change the 5500 for the port you're listening to.

7. Right now the command to run a specific test is static, which will be improved. If you still see this step it means that when you want to run a specific test file you will need to go once again to the **wdio.conf.js** file and change the following line:

   > _specs: ['./tests/header.spec.js'],_

   As you can see in this case the test to run is the _ header.spec.js_ file, so if you want to run another test just change the name on this line.

8) Finally check that you are on the WDIO directory and type the following command to run a test:

```sh
$ npm test wdio.conf.js
```

## Extra :bulb:

I'm open to opinions and I won't take any feedback personal. Please let me know what I can improve.

# ENROUTE SYSTEMS - GO FURTHER! :rocket: :rocket: :rocket:
