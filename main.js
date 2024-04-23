// main.js

/**
 * Required External Modules
 */

import express from 'express'
import path from 'path'

/**
 * App Variables
 */

const app = express()
const port = process.env.PORT || "4000"

/**
 *  App Configuration
 */

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "assets")))

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.render("index", { title: "Home" })
})

app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "User" } })
})

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`)
})