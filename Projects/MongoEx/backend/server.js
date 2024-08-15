const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./config.env"});

app.use(cors());
app.use(express.json());

const dbo = require("./db/conn");
const recordRoutes = require("./routes/record");
app.use("/record", recordRoutes);
const port = process.env.PORT || 4000;

app.get("/", (req,res) => {
    res.send("Hello, World!");
});


app.listen(port, () => {
    dbo.connectToServer(function(err) {
        if (err) {
            console.err(err);
        }
    });
    console.log(`Server is running on port ${port}`);
});
