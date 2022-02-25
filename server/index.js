require("regenerator-runtime")
require("dotenv/config")

const express = require("express")
const cors = require("cors")

const startServer = require("./helpers/startServer")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("*", async (req, res) => {
	res.send("hello")
})

startServer(app)
