const express = require("express");
const dotenv = require("dotenv");
const admin = require("firebase-admin");
const { readFileSync } = require("fs");

dotenv.config();

const app = express();
app.use(express.json());

const serviceAccount = JSON.parse(readFileSync("./keys/firebase.json"));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com"
});

app.get("/", (req, res) => {
  res.send("WhatsApp MiniStore API is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
