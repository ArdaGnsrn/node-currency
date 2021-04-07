# node-currency

JavaScript library for current exchange rates

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install node-currency
```

### Usage

Sample code to see the exchange rate of BitTorrent Coin against Turkish Lira:

```javascript
const currency = require("node-currency")

async function start() {
  try {
    const data = await currency.getCurrency("btt-try")
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

start()
```
