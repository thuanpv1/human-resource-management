# Environment for all developers

- Dowload and install the lastest version of nodejs: https://nodejs.org/en/download/ .

Note: Not necessary install npm because it is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.

- Dowload and install the lastest version of mongodb: https://www.mongodb.com/ .

# Environment for front-end developers

- Install Angular CLI with cmd syntax: npm install -g @angular/cli

- Go to front-end source code folder and install devDependencies at here with syntax: npm install --only=dev

# Environment for back-end developers

- Install Express with cmd syntax: npm install -g express

- Go to back-end source code folder and install devDependencies at here with syntax: npm install --only=dev

# How to build and run project?

Step1: Go to front-end source code folder and install front-end dependencies with cmd syntax: npm install

Step2: Go to back-end source code folder and install back-end dependencies with cmd syntax: npm install

Step3: Start database server with cmd syntax: mongod --dbpath <path-to-your-database>
	Node: This step is done when you can see the message: 
		Waiting connections on port 27017

Step4: Go to back-end source code folder and start back-end server with cmd syntax: npm run dev
	Node: This step is done when you can see the message: 
		Express server running on port 4000
		MongoDB database connection established successfully!

Step5: Go to front-end source code folder and start front-end server with cmd syntax: ng serve --open

# May be you will need it

- To create new project with Angular CLI: ng new <name-project>

- To generate new component with Angular CLI: ng g c <name-component>

- To generate new service with Angular CLI: ng g s <name-service>

- To install a package on generic mode with npm: npm install -g <name-package>

- To install a package on local mode (node_module) with npm: npm install --save <name-package>

- To create new package.json with npm: npm init -y

- To install a package for devDependencies with npm: npm install -dev <name-package>

# Version of this file
1.0