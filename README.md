##Purpose
This app is designed to allow an icon pack creator/developer to easily filter from their list of icons and organize their structure and workflow with a database.

The main dashboard will consist of a collection of all the data from the entire app. It will by default show a list of incomplete icons in the collection, hiding others. The header nav has options to show/hide **INCOMPLETE/STAGED/COMPLETE** and perform a search on any name (app or file) in the collection.
When an icon request is completed, user will select the options in the table (checkboxes) to select the **COMPLETE** option
When an icon is already in the pack, but a request has come in for it, user will mark **FIX ACTIVITY** for use when updating the packs
When an application is added, it will default to '_false_' on all the options, showing it in the INCOMPLETE status.

These statuses will be updated in the database (_current deployment method_) or JSON (_future enhancement_), depending on your method of deployment.

##Install

`git clone 'git@github.com:flamingm0e/App_Database.git'`

`cd App_Database`

`npm install`

`bower install`

##Requirements
You will need a mongodb to connect to, or in the future we will have JSON capabilities to edit JSON files directly in the project

`/server.js` handles the connectivity to the database and also instatiates the web service

Within `/server.js` edit the line that says `var db = monk('mongodb://192.168.254.25:27017/appsDB');` with the connection to your database


##Run the Application
We have preconfigured the project with a simple development web server. The simplest way to start this server is:

`npm start`
or
`nodemon -V server.js`

Now browse to the app at http://localhost:8000/.

##Database Schema
`categories` collection is an array of different categories and their descriptions.

`http://localhost:8000/api/categories`

Example:```
	[
    {
        "_id": "54dfbddb4513947317f11661",
        "category": "Browsers",
        "description": "Web Browsers"
    },
    {
        "_id": "54dfbec04513947317f11662",
        "category": "Cloud Storage",
        "description": "Cloud storage applications and services"
    }
    ]```

Each category will get its own collection.  If the collection does not exist before adding a new application, the API will handle creating the collection.

The category name will have spaces stripped/replaced with underscores and ' & ' will be replaced with a dash.

`http://localhost:8000/api/browsers`

`http://localhost:8000/api/cloud_storage`

Example of a category collection:```[{"_id":"54dfcb3d61fa5dfecf20e185","appName":"Android Browser","fileName":"androidbrowser.png","complete":true,"stage":false,"fix":false,"linkDescription":""},{"_id":"54e00c3a61fa5dfecf20e186","appName":"Boat Browser","fileName":"boatbrowser.png","complete":true,"stage":false,"fix":false,"linkDescription":""}]```

`/api/routes.js` has all the api calls and paths


