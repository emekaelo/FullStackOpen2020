require("dotenv").config()

let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    MONGODB_URI
}