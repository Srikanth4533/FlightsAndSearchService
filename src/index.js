const express = require("express")
const bodyParser = require("body-parser")

const { PORT } = require("../src/config/serverConfig")
const CityRepository = require("../src/repository/city-repository")


const setupAndStartServer = async() => {
    // create the express object
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`)
        // console.log(City)
        const repo = new CityRepository()
        repo.createCity({ name: "Bengaluru" })
        repo.deleteCity(1)

    })
}

setupAndStartServer()