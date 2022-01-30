const { Interesse } = require("../database/models");

const interessesServices = {}

interessesServices.getAllInteresses = async () => {
    const interesses = await Interesse.findAll()

    return interesses
}

interessesServices.setUsuarioInteresse = async(data) => {
    return await Interesse.create([{...data}])
}

module.exports = interessesServices