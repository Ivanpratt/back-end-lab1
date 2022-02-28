const express = require("express")
const cors = require("cors");
const { restart } = require("nodemon");

const app = express();


app.use(express.json());
app.use(cors());




app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
    console.log(friends)
})

app.get("/weather/:temperature", (req, res) => {
    const text = `congrats, you have noticed it is ${req.params.temperature} outside`
    res.status(200).send(text)
})




app.listen(5600, () => console.log("Server running on port 5600"));