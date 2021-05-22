const {add, getAll} = require("../../services/supermarket/supermarket.service");

module.exports = {
    addSuperMarket: async args => {
        const addedSupermarket = await add(args.supermarket)
        return { ...addedSupermarket._doc, _id: addedSupermarket.id }
    },

    getSuperMarkets: async args => {
        const allSupermarkets = await getAll()
        return allSupermarkets.map(supermarket => {
                return {
                    ...supermarket._doc,
                    _id: supermarket.id,
                    createdAt: new Date(supermarket._doc.createdAt).toISOString(),
                }
            })
    },
}