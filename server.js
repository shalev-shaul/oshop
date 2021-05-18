const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app.get("/re", (req, res) => {
  res.json({ message: "Welcome to reerer application." });
});
app.get("/api/status", function (req, res) {
  res.status(200).json({ status: "UP" });
});
app.post("/product", function (req, res) {
  // var product = req.body;

  // if (!product.name) {
  //     manageError(res, "Invalid product input", "Name is mandatory.", 400);
  // } else if (!product.brand) {
  //     manageError(res, "Invalid product input", "Brand is mandatory.", 400);
  // } else {
  //     database.collection(PRODUCTS_COLLECTION).insertOne(product, function (err, doc) {
  //         if (err) {
  //             manageError(res, err.message, "Failed to create new product.");
  //         } else {
  //             res.status(201).json(doc.ops[0]);
  //         }
  //     });
  // }

  manageError(res, "Invalid product input", "Name is mandatory.", 400);
});

mongodb.MongoClient.connect(
  process.env.MONGODB_URI || LOCAL_DATABASE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function (error, client) {
    // Check if there are any problems with the connection to MongoDB database.
    if (error) {
      console.log(error);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    database = client.db();
    console.log("Database connection done.");

    // Initialize the app.
    var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
  }
);
var mongodb = require("mongodb");

mongodb.MongoClient.connect(
  "mongodb://localhost:27017/OshopTest",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function (error, client) {
    // Check if there are any problems with the connection to MongoDB database.
    if (error) {
      console.log(error);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    database = client.db();
    console.log("Database connection done.");

    // Initialize the app.
    var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
  }
);
// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
