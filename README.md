# MovIT
A website for movies which includes different categories like genere, actors, directors, IMDB ratings etc.

## Installation

### Create a new Firebase project

Head over to your [firebase console](https://console.firebase.google.com/) and click on **Add Project.**<br/>
Choose a suitable name, and follow the instuctions on the screen to set up the project.

### Dependency Installation

Run the following in the root directory of the project.

```
npm install
```

Firebase CLI and the other dependencies are now installed in your system.

### Firebase Project Initialization

First, you need to login to the Firebase CLI using:

```
firebase login
```

To initialise the project on firebase, run the following in the root directory of the project.

```
firebase init 
```

Answer the questions served by the CLI as mentioned below.

```
? Are you ready to proceed? (Y/n) 

y
```

```
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. 

Hosting
```

```
? What do you want to use as your public directory? 

dist/spa
```


```bash
Configure as a single-page app (rewrite all urls to /index.html)? 

No
```

```bash
? File public/index.html already exists. Overwrite?

No
```

Firebase has now been initialised on this project.

### Firebase Configuration

Head over to your [firebase console](https://console.firebase.google.com/) and click on The project you created.<br/>
Create a new web app, and follow the instuctions on the screen to set up the project.

Create a new file in the root of your project __firebaseConfig.json__ and paste in your config object.

## Testing/Serving

### Live testing

Navigate to the the root of the repository, and execute the following in a terminal.

```
npm start
```

### Source Building

Navigate to the the root of the repository, and execute the following in a terminal.

```
npm run build
```

### Serving locally

Navigate to the the root of the repository, and execute the following in a terminal.

```
npm run serve
```

Click the link generated in the console to view the locally served app.

## Deployment

### Deploying on firebase

Navigate to the the root of the repository, and execute the following in a terminal.

```
npm run deploy
```

Click the link generated in the console to view the hosted app.

## Live Demo


You can access the project's live demo [here](https://we-project-324ee.web.app/index)
