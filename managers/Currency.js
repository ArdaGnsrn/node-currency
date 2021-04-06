const axios = require("axios")

module.exports = {
  fetchCurrency: async (pairId) => {
    return axios({
      method: 'GET',
      url: 'https://www.investing.com/common/modules/js_instrument_chart/api/data.php',
      params: {
        pair_id: pairId,
        pair_interval: '86400',
        chart_type: 'area',
        candle_count: '120',
        volume_series: 'yes',
        events: 'yes',
        period: '1-year'
      },
      headers: {
        'Referer': 'https://www.investing.com/',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}