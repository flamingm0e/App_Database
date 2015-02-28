// app/routes.js

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    app.get('/api/categories', function(req, res) {
        // get all categories in the database
        var collection = req.db.get('categories');
        collection.find({}, function (err, docs) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err) res.send(err);
            res.json(docs); // return all categories in JSON format
        });
    });

    app.get('/api/:appCategory', function(req, res) {
        // get all items within a category in the database
        var collection = req.db.get(req.params.appCategory);
        collection.find({}, function (err, docs) {
            if (err) res.send(err);
            res.json(docs);
        });
    });

    // routes to handle inserts goes here (app.post)
    app.post('/api/add/categories', function(req, res) {
        // create categories in the database
        var collection = req.db.get('categories');
        collection.update({category: req.body.category},
            {$setOnInsert:{
                category: req.body.category,
                description: req.body.description
                }
            },
            {upsert: true},
            function(err, docs) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(docs); // return data that was inserted into collection
        });
    });

    app.post('/api/add/:category', function(req, res) {
        // create items in a specific category in the database
        var collection = req.db.get(req.params.category);
        collection.update({appName: req.body.appName},
            {$setOnInsert:{
                appName: req.body.appName,
                fileName: req.body.fileName,
                complete: req.body.complete,
                stage: req.body.stage,
                fix: req.body.fix,
                linkDescription: req.body.linkDescription}
            },
            {upsert: true},
            function(err, docs) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(docs); // return data that was inserted into collection
        });
    });

    app.post('/api/:category', function(req, res) {
        // update items in a specific category in the database
        var collection = req.db.get(req.params.category);
        collection.findAndModify({appName: req.body.appName},
            {
                appName: req.body.appName,
                fileName: req.body.fileName,
                complete: req.body.complete,
                stage: req.body.stage,
                fix: req.body.fix,
                linkDescription: req.body.linkDescription
            },
            {upsert: true},
            function(err, docs) {
                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(docs); // return data that was inserted into collection
            });
    });
    app.put('/api/:category', function(req, res) {
        // update items in a specific category in the database
        var collection = req.db.get(req.params.category);
        collection.findAndModify({appName: req.body.appName},
            {
                appName: req.body.appName,
                fileName: req.body.fileName,
                complete: req.body.complete,
                stage: req.body.stage,
                fix: req.body.fix,
                linkDescription: req.body.linkDescription
            },
            //{upsert: true},
            function(err, docs) {
                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(docs); // return data that was inserted into collection
            });
    });

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
