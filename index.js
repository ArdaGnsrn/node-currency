const { fetchCurrency } = require("./managers/Currency")
const Utils = new (require("./managers/Utils"))
const pairs = require("./pairs")

module.exports = {
  getCurrency: async (currencyKey, options = { withTransactions: true, convertTimestamps: false }) => {
    return new Promise(async (resolve, reject) => {
      if (!pairs[currencyKey]) return reject({ message: `${currencyKey} not found!` })

      try {
        const { data } = await fetchCurrency(pairs[currencyKey])
        return resolve(Utils.getResultWithOptions(data, options))
      } catch (e) {
        return reject(e)
      }
    })
  }
}