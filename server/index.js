import express from "express";
import mongoose from "mongoose";
import http from "http";
import { User, University } from "./model.js";
import cors from "cors";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

// requests
app.get("/user/:id", async (req, res) => {
    const _id = req.params.id;

    User.find({ _id }, async (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(data);
    });

});

app.get("/universities", async (req, res) => {

    University.find({}, async (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(data);
    });

});

app.post("/add_university", async (req, res) => {
    const university = new University(req.body);

    university.save().then(res => {
        res.status(200).send("Saved");
    }).catch(err => res.send(err))
});

app.patch("/add_university_to_user/:id", async (req, res) => {
    const _id = req.params.id;
    const { universities } = req.body;

    User.update({ _id }, {
        universities: universities
    }).then(res => {
        res.status(200).send("Updated");
    }).catch(err => res.send(err))
});

// connecting to mongo db
mongoose.connect("mongodb+srv://admin:YLyJ6UTBIrPxSANs@cluster0.xxutl.mongodb.net/irc_task?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connection: success");
}).catch(err => console.log(err));

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("Listening to PORT : " + PORT));