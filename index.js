// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firebase-database";

//-----------
const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || "3333";

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
//-----------



const admin = require("firebase-admin");
// Fetch the service account key JSON file contents
const serviceAccount = require("./credentials/findusersbrazil-firebase-adminsdk-3o3s4-750b41da28.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://findusersbrazil.firebaseio.com"
  });

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.database();




