const currency = require("../index")

async function start() {
  try {
    const data = await currency.getCurrency("btt-try")
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}

start()
