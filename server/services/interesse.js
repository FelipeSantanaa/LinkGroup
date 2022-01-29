const { Interesse } = require("../database/models");

const interessesServices = {}

interessesServices.getAllInteresses = async () => {
    const interesses = await Interesse.findAll()

    return interesses
}