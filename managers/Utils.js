class Utils {
  getTransactions(data) {
    return data.map(item => ({
      date: item[0],
      value: item[1]
    }))
  }

  addKeyToObj(obj, data = {}) {
    return {
      ...obj,
      ...data
    }
  }

  getResultWithOptions(data, options) {
    const { attr, candles } = data;

    let result = {}
    result = this.addKeyToObj(result, {
      name: attr.symbol,
      lastValue: attr.last_value,
    })
    if (options.withTransactions) {
      result = this.addKeyToObj(result, { transactions: this.getTransactions(candles) })
    }
    return result
  }
}

module.exports = Utils