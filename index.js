const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.yh8qk3b.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const serviceCollection = client.db('ShineHome').collection('Services');
const bedroomCollection = client.db('ShineHome').collection('bedroom');
const quoteInfoCollection = client.db('ShineHome').collection('quoteInfoCollection');

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    app.get('/services', async (req, res) => {
        const result = await serviceCollection.find().toArray()
        res.send(result)
    })

    //get rooms collection
    app.get('/bedrooms', async (req, res) => {
        const result = await bedroomCollection.find().toArray()
        res.send(result)
    })

    app.post('/quoteInfo', async(req, res) => {
        const quoteInfo = req.body;
        const result = await quoteInfoCollection.insertOne(quoteInfo);
        res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("ShineHome server is running");
});

app.listen(port, () => {
  console.log(`ShineHome Server is running port : ${port}`);
});
