var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

const { MongoClient, Double } = require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const dbName = "finaldata";
const client = new MongoClient(url);
const db = client.db(dbName);

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

app.get("/listProducts", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("motorcycle_catalog")
        .find(query)
        .limit(100)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

app.get("/:id", async (req, res) => {
    const productid = Number(req.params.id);
    console.log("Product to find :", productid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": productid };
    const results = await db.collection("motorcycle_catalog")
        .findOne(query);
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

app.post("/addProduct", async (req, res) => {
    await client.connect();
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);

    const newDocument = {
        "id": req.body.id,
        "price": req.body.price,
        "model": req.body.model,
        "type": req.body.type,
        "name": req.body.name,
        "image": req.body.image,
        "contact": req.body.contact,
        "desc": req.body.desc
    };

    console.log(newDocument);

    const results = await db
        .collection("motorcycle_catalog")
        .insertOne(newDocument);

    try {
        res.status(200);
        res.send(results);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});


app.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        await client.connect();
        console.log("Product to delete :", id);
        const query = { id: id };
        // delete
        const productDeleted = await db.collection("motorcycle_catalog").findOne(query);

        res.status(200);

        const results = await db.collection("motorcycle_catalog").deleteOne(query);
        res.send(results);
    }
    catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.put("/updateProduct/:id", async (req, res) => {
    const id = parseFloat(req.params.id);
    const newPrice = parseFloat(req.body.price);
    console.log("Backend " + newPrice);
    const query = { id: id };
    const updateDocument = { $set: { price: newPrice } };
    const options = { returnDocument: 'after' };

    try {
        const result = await db.collection("motorcycle_catalog").findOneAndUpdate(query, updateDocument, options);
        if (result.value) {
            res.status(200).send(result.value);
        } 
        else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.get("/listProducts/:category?", async (req, res) => {  // Optional path parameter
    const category = req.params.category;

    await client.connect();
    try {
        const query = category ? { type: category } : {};  // Build query object based on the path parameter
        const results = await db.collection("motorcycle_catalog").find(query).toArray();
        if (results.length === 0) {
            res.status(404).send("No products found in this category");
        } else {
            res.status(200).send(results);
        }
    } catch (error) {
        console.error("Error fetching products by category:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});










