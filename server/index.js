require("regenerator-runtime")
require("dotenv/config")

const express = require("express")
const cors = require("cors")

const startServer = require("./helpers/startServer")
const connectDB = require("./helpers/connectDB")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PostRoute = require("./routes/PostRoute")
const CommentRoute = require("./routes/CommentRoute.js")
const UserRoute = require("./routes/UserRoute.js")

app.use("/posts/", PostRoute)
app.use("/comments/", CommentRoute)
app.use("/users/", UserRoute)

app.get("*", async (req, res) => {
	res.send("hello")
})

connectDB()
startServer(app)
