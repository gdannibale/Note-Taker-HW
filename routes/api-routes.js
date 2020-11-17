// Require models
let db = require("../models");

// Routes
module.exports = function (app) {

    // GET route to get all foods
    app.get("/api/notes/current", function (req, res) {
        db.Notes.findAll({}).then(function (dbNotes) {
            res.json(dbNotes);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // POST route for creating new food
    app.post("/api/notes", function (req, res) {
        db.Notes.create({
            name: req.body.name
        }).then(function (dbNotes) {
            res.json(dbNotes);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // PUT route for updating food
    app.put("/notes/:id", function (req, res) {
        db.Notes.update({
            name: req.body.name
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbNotes) {
            res.json(dbNotes);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // DELETE route for deleting food
    app.delete("/notes/:id", function (req, res) {
        db.Notes.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbNotes) {
            res.json(dbNotes);
        }).catch(function (err) {
            res.json(err);
        });
    });
}