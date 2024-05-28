//-------Module Importation -------//
/**import Express Module****/
const express = require ("express");
/**import Module Body Parser****/
const bodyParser = require("body-parser");
/**import Mongoose Module ****/
const mongoose = require("mongoose");
// import ObjectID
const { ObjectId } = require("mongodb");
// Connect APP to DB (projetVenteDB)
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/portfoliobilelDB');


////----------Express Application--------////
// creates express application //
const app = express();
/** Module Importation  ****/
const Contact = require("./models/contact");

// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Contact------------------------------------////
//**********************Add Contact************************************/// */
app.post("/contact", (req, res) => {
    console.log("Here into BL: Add Contact", req.body);
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    console.log("here add contact", contact);
    contact.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Add with success" });

        } else {
            res.json({ message: "Error" });

        }
    });
});
//**********************Get All Contact************************************/// */
app.get("/contact/contact/all", (req, res) => {
    console.log("Here into BL: Get All Contact Problem");
    Contact.find().then((docs) => {
        res.json({ contact: docs });
    });
});

//**********************Delete Contact************************************/// */
app.delete("/contact/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete contact By ID", id);
    Contact.deleteOne({ _id: id }).then((response) => {
        console.log("Here response contact after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});





///---------App Exportation--------///
// make app importable from another files
module.exports = app;