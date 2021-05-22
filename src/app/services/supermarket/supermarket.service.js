const db = require("../../models");
const Supermarket = db.supermarket;
const Logger = require('../../common/Logger').getLogger("SuperMarket Service")

const add = (supermarket) => {
    Logger.info("Attempting to Save supermarket");

    const supermarketModel = new Supermarket({
        identifier: supermarket.identifier,
        name: supermarket.name,
        url: supermarket.url,
        published: supermarket.active ? supermarket.active : false
    });
    return supermarketModel
        .save(supermarketModel);

};

const getAll = () => {
    Logger.info("Attempting to retrieve all supermarkets");
        return Supermarket
        .find();

};

module.exports = {
    add, getAll
}