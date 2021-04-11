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

### Available Currencies

You can see the exchange rates you can use below. If you cannot find the currency you are looking for, you can contact me.


* **btt-try** <> BTTN/TRY - BitTorrent Türk Lirası
* **eur-usd** <> EUR/USD - Euro US Dollar
* **gbp-usd** <> GBP/USD - British Pound US Dollar
* **usd-jpy** <> USD/JPY - US Dollar Japanese Yen
* **usd-chf** <> USD/CHF - US Dollar Swiss Franc
* **aud-usd** <> AUD/USD - Australian Dollar US Dollar
* **eur-gbp** <> EUR/GBP - Euro British Pound
* **usd-cad** <> USD/CAD - US Dollar Canadian Dollar
* **nzd-usd** <> NZD/USD - New Zealand Dollar US Dollar
* **eur-jpy** <> EUR/JPY - Euro Japanese Yen
* **eur-chf** <> EUR/CHF - Euro Swiss Franc
* **gbp-jpy** <> GBP/JPY - British Pound Japanese Yen
* **gbp-chf** <> GBP/CHF - British Pound Swiss Franc
* **chf-jpy** <> CHF/JPY - Swiss Franc Japanese Yen
* **cad-chf** <> CAD/CHF - Canadian Dollar Swiss Franc
* **eur-aud** <> EUR/AUD - Euro Australian Dollar
* **eur-cad** <> EUR/CAD - Euro Canadian Dollar
* **usd-zar** <> USD/ZAR - US Dollar South African Rand
* **usd-try** <> USD/TRY - US Dollar Turkish Lira
* **btc-usd** <> BTC/USD - Bitcoin US Dollar
* **btc-eur** <> BTC/EUR - Bitcoin Euro
* **btc-jpy** <> BTC/JPY - Bitcoin Japanese Yen
* **btc-cad** <> BTC/CAD - Bitcoin Canadian Dollar
* **btc-gbp** <> BTC/GBP - Bitcoin British Pound
* **btc-chf** <> BTC/CHF - Bitcoin Swiss Franc
* **btc-rub** <> BTC/RUB - Bitcoin Russian Ruble
* **btc-aud** <> BTC/AUD - Bitcoin Australian Dollar
* **btc-sek** <> BTC/SEK - Bitcoin Swedish Krona
* **btc-dkk** <> BTC/DKK - Bitcoin Danish Krone
* **btc-hkd** <> BTC/HKD - Bitcoin Hong Kong Dollar
* **btc-pln** <> BTC/PLN - Bitcoin Polish Zloty
* **btc-cny** <> BTC/CNY - Bitcoin Chinese Yuan
* **btc-sgd** <> BTC/SGD - Bitcoin Singapore Dollar
* **btc-thb** <> BTC/THB - Bitcoin Thai Baht
* **eur-nok** <> EUR/NOK - Euro Norwegian Krone
* **btc-nzd** <> BTC/NZD - Bitcoin New Zealand Dollar
* **usd-mxn** <> USD/MXN - US Dollar Mexican Peso
* **usd-pln** <> USD/PLN - US Dollar Polish Zloty
* **usd-sek** <> USD/SEK - US Dollar Swedish Krona
* **usd-sgd** <> USD/SGD - US Dollar Singapore Dollar
* **usd-dkk** <> USD/DKK - US Dollar Danish Krone
* **eur-dkk** <> EUR/DKK - Euro Danish Krone
* **btc-nok** <> BTC/NOK - Bitcoin Norwegian Krone
* **eur-pln** <> EUR/PLN - Euro Polish Zloty
* **aud-cad** <> AUD/CAD - Australian Dollar Canadian Dollar
* **aud-chf** <> AUD/CHF - Australian Dollar Swiss Franc
* **aud-jpy** <> AUD/JPY - Australian Dollar Japanese Yen
* **aud-nzd** <> AUD/NZD - Australian Dollar New Zealand Dollar
* **cad-jpy** <> CAD/JPY - Canadian Dollar Japanese Yen
* **eur-nzd** <> EUR/NZD - Euro New Zealand Dollar
* **gbp-aud** <> GBP/AUD - British Pound Australian Dollar
* **gbp-cad** <> GBP/CAD - British Pound Canadian Dollar
* **gbp-nzd** <> GBP/NZD - British Pound New Zealand Dollar
* **nzd-cad** <> NZD/CAD - New Zealand Dollar Canadian Dollar
* **nzd-chf** <> NZD/CHF - New Zealand Dollar Swiss Franc
* **nzd-jpy** <> NZD/JPY - New Zealand Dollar Japanese Yen
* **usd-nok** <> USD/NOK - US Dollar Norwegian Krone
* **gbp-sgd** <> GBP/SGD - British Pound Singapore Dollar
* **eur-sek** <> EUR/SEK - Euro Swedish Krona
* **usd-ils** <> USD/ILS - US Dollar Israeli Shekel
* **eur-ils** <> EUR/ILS - Euro Israeli Shekel
* **gbp-ils** <> GBP/ILS - British Pound Israeli Shekel
* **eur-try** <> EUR/TRY - Euro Turkish Lira
* **xau-usd** <> XAU/USD - Gold Spot US Dollar
* **xag-usd** <> XAG/USD - Silver Spot US Dollar
* **nzd-dkk** <> NZD/DKK - New Zealand Dollar Danish Krone
* **nok-jpy** <> NOK/JPY - Norwegian Krone Japanese Yen
* **pln-jpy** <> PLN/JPY - Polish Zloty Japanese Yen
* **try-jpy** <> TRY/JPY - Turkish Lira Japanese Yen
* **thb-jpy** <> THB/JPY - Thai Baht Japanese Yen
* **dkk-huf** <> DKK/HUF - Danish Krone Hungarian Forint
* **zar-jpy** <> ZAR/JPY - South African Rand Japanese Yen
* **mxn-jpy** <> MXN/JPY - Mexican Peso Japanese Yen
* **nzd-czk** <> NZD/CZK - New Zealand Dollar Czech Koruna
* **dkk-czk** <> DKK/CZK - Danish Krone Czech Koruna
* **nzd-pln** <> NZD/PLN - New Zealand Dollar Polish Zloty
* **cad-pln** <> CAD/PLN - Canadian Dollar Polish Zloty
* **aud-pln** <> AUD/PLN - Australian Dollar Polish Zloty
* **pln-czk** <> PLN/CZK - Polish Zloty Czech Koruna
* **chf-pln** <> CHF/PLN - Swiss Franc Polish Zloty
* **dkk-pln** <> DKK/PLN - Danish Krone Polish Zloty
* **pln-huf** <> PLN/HUF - Polish Zloty Hungarian Forint
* **gbp-pln** <> GBP/PLN - British Pound Polish Zloty
* **chf-huf** <> CHF/HUF - Swiss Franc Hungarian Forint
* **usd-huf** <> USD/HUF - US Dollar Hungarian Forint
* **nzd-huf** <> NZD/HUF - New Zealand Dollar Hungarian Forint
* **gbp-nok** <> GBP/NOK - British Pound Norwegian Krone
* **eur-thb** <> EUR/THB - Euro Thai Baht
* **gbp-thb** <> GBP/THB - British Pound Thai Baht
* **gbp-zar** <> GBP/ZAR - British Pound South African Rand
* **gbp-try** <> GBP/TRY - British Pound Turkish Lira
* **dkk-sek** <> DKK/SEK - Danish Krone Swedish Krona
* **nok-dkk** <> NOK/DKK - Norwegian Krone Danish Krone
* **eur-zar** <> EUR/ZAR - Euro South African Rand
* **eur-mxn** <> EUR/MXN - Euro Mexican Peso
* **eur-sgd** <> EUR/SGD - Euro Singapore Dollar
* **usd-czk** <> USD/CZK - US Dollar Czech Koruna
* **dkk-jpy** <> DKK/JPY - Danish Krone Japanese Yen
* **gbp-sek** <> GBP/SEK - British Pound Swedish Krona
* **cad-dkk** <> CAD/DKK - Canadian Dollar Danish Krone
* **chf-sgd** <> CHF/SGD - Swiss Franc Singapore Dollar
* **chf-hkd** <> CHF/HKD - Swiss Franc Hong Kong Dollar
* **aud-nok** <> AUD/NOK - Australian Dollar Norwegian Krone
* **dkk-sgd** <> DKK/SGD - Danish Krone Singapore Dollar
* **nok-sek** <> NOK/SEK - Norwegian Krone Swedish Krona
* **chf-nok** <> CHF/NOK - Swiss Franc Norwegian Krone
* **cad-nok** <> CAD/NOK - Canadian Dollar Norwegian Krone
* **czk-huf** <> CZK/HUF - Czech Koruna Hungarian Forint
* **gbp-czk** <> GBP/CZK - British Pound Czech Koruna
* **eur-huf** <> EUR/HUF - Euro Hungarian Forint
* **nzd-sek** <> NZD/SEK - New Zealand Dollar Swedish Krona
* **sek-pln** <> SEK/PLN - Swedish Krona Polish Zloty
* **nzd-thb** <> NZD/THB - New Zealand Dollar Thai Baht
* **nzd-zar** <> NZD/ZAR - New Zealand Dollar South African Rand
* **aud-zar** <> AUD/ZAR - Australian Dollar South African Rand
* **chf-zar** <> CHF/ZAR - Swiss Franc South African Rand
* **dkk-zar** <> DKK/ZAR - Danish Krone South African Rand
* **aud-sgd** <> AUD/SGD - Australian Dollar Singapore Dollar
* **chf-try** <> CHF/TRY - Swiss Franc Turkish Lira
* **sek-jpy** <> SEK/JPY - Swedish Krona Japanese Yen
* **dkk-thb** <> DKK/THB - Danish Krone Thai Baht
* **aud-thb** <> AUD/THB - Australian Dollar Thai Baht
* **sgd-hkd** <> SGD/HKD - Singapore Dollar Hong Kong Dollar
* **gbp-hkd** <> GBP/HKD - British Pound Hong Kong Dollar
* **cad-sgd** <> CAD/SGD - Canadian Dollar Singapore Dollar
* **gbp-dkk** <> GBP/DKK - British Pound Danish Krone
* **gbp-huf** <> GBP/HUF - British Pound Hungarian Forint
* **chf-dkk** <> CHF/DKK - Swiss Franc Danish Krone
* **aud-sek** <> AUD/SEK - Australian Dollar Swedish Krona
* **chf-sek** <> CHF/SEK - Swiss Franc Swedish Krona
* **aud-czk** <> AUD/CZK - Australian Dollar Czech Koruna
* **chf-czk** <> CHF/CZK - Swiss Franc Czech Koruna
* **cad-sek** <> CAD/SEK - Canadian Dollar Swedish Krona
* **hkd-jpy** <> HKD/JPY - Hong Kong Dollar Japanese Yen
* **czk-jpy** <> CZK/JPY - Czech Koruna Japanese Yen
* **aud-dkk** <> AUD/DKK - Australian Dollar Danish Krone
* **sgd-jpy** <> SGD/JPY - Singapore Dollar Japanese Yen
* **aud-hkd** <> AUD/HKD - Australian Dollar Hong Kong Dollar
* **usd-thb** <> USD/THB - US Dollar Thai Baht
* **eur-hkd** <> EUR/HKD - Euro Hong Kong Dollar
* **nzd-sgd** <> NZD/SGD - New Zealand Dollar Singapore Dollar
* **nzd-hkd** <> NZD/HKD - New Zealand Dollar Hong Kong Dollar
* **cad-hkd** <> CAD/HKD - Canadian Dollar Hong Kong Dollar
* **usd-aed** <> USD/AED - US Dollar UAE Dirham
* **usd-jod** <> USD/JOD - US Dollar Jordan Dinar
* **usd-kwd** <> USD/KWD - US Dollar Kuwaiti Dinar
* **usd-hkd** <> USD/HKD - US Dollar Hong Kong Dollar
* **eur-czk** <> EUR/CZK - Euro Czech Koruna
* **usd-sar** <> USD/SAR - US Dollar Saudi Riyal
* **eur-krw** <> EUR/KRW - Euro Korean Won
* **jpy-krw** <> JPY/KRW - Japanese Yen Korean Won
* **usd-inr** <> USD/INR - US Dollar Indian Rupee
* **s&p-asx** <> S&P/ASX 200
* **kimberly-clark** <> Kimberly-Clark Corporation
* **coca-cola** <> Coca-Cola Co
* **upm-kymmene** <> UPM-Kymmene Oyj
* **schoeller-bleckmann** <> Schoeller-Bleckmann AG
* **usd-krw** <> USD/KRW - US Dollar Korean Won
* **aed-jpy** <> AED/JPY - UAE Dirham Japanese Yen
* **aed-pkr** <> AED/PKR - UAE Dirham Pakistani Rupee
* **ars-brl** <> ARS/BRL - Argentinian Peso Brazil Real
* **ars-hkd** <> ARS/HKD - Argentinian Peso Hong Kong Dollar
* **ars-jpy** <> ARS/JPY - Argentinian Peso Japanese Yen
* **ars-mxn** <> ARS/MXN - Argentinian Peso Mexican Peso
* **aud-ars** <> AUD/ARS - Australian Dollar Argentinian Peso
* **aud-brl** <> AUD/BRL - Australian Dollar Brazil Real
* **aud-cny** <> AUD/CNY - Australian Dollar Chinese Yuan
* **aud-eur** <> AUD/EUR - Australian Dollar Euro
* **aud-fjd** <> AUD/FJD - Australian Dollar Fiji Dollar
* **aud-gbp** <> AUD/GBP - Australian Dollar British Pound
* **aud-huf** <> AUD/HUF - Australian Dollar Hungarian Forint
* **aud-idr** <> AUD/IDR - Australian Dollar Indonesian Rupiah
* **aud-ils** <> AUD/ILS - Australian Dollar Israeli Shekel
* **aud-inr** <> AUD/INR - Australian Dollar Indian Rupee
* **aud-krw** <> AUD/KRW - Australian Dollar Korean Won
* **aud-mxn** <> AUD/MXN - Australian Dollar Mexican Peso
* **aud-myr** <> AUD/MYR - Australian Dollar Malaysian Ringgit
* **aud-pkr** <> AUD/PKR - Australian Dollar Pakistani Rupee
* **aud-twd** <> AUD/TWD - Australian Dollar Taiwan Dollar
* **bhd-eur** <> BHD/EUR - Baharain Dinar Euro
* **bhd-pkr** <> BHD/PKR - Baharain Dinar Pakistani Rupee
* **bnd-gbp** <> BND/GBP - Brunei Dollar British Pound
* **brl-ars** <> BRL/ARS - Brazil Real Argentinian Peso
* **brl-aud** <> BRL/AUD - Brazil Real Australian Dollar
* **brl-cad** <> BRL/CAD - Brazil Real Canadian Dollar
* **brl-chf** <> BRL/CHF - Brazil Real Swiss Franc
* **brl-clp** <> BRL/CLP - Brazil Real Chilean Peso
* **brl-dkk** <> BRL/DKK - Brazil Real Danish Krone
* **brl-hkd** <> BRL/HKD - Brazil Real Hong Kong Dollar
* **brl-jpy** <> BRL/JPY - Brazil Real Japanese Yen
* **brl-mxn** <> BRL/MXN - Brazil Real Mexican Peso
* **brl-sgd** <> BRL/SGD - Brazil Real Singapore Dollar
* **brl-usd** <> BRL/USD - Brazil Real US Dollar
* **bsd-gbp** <> BSD/GBP - Bahamas Dollar British Pound
* **bwp-zar** <> BWP/ZAR - Botswana Pula South African Rand
* **cad-aed** <> CAD/AED - Canadian Dollar UAE Dirham
* **cad-ars** <> CAD/ARS - Canadian Dollar Argentinian Peso
* **cad-aud** <> CAD/AUD - Canadian Dollar Australian Dollar
* **cad-brl** <> CAD/BRL - Canadian Dollar Brazil Real
* **cad-cny** <> CAD/CNY - Canadian Dollar Chinese Yuan
* **cad-eur** <> CAD/EUR - Canadian Dollar Euro
* **cad-gbp** <> CAD/GBP - Canadian Dollar British Pound
* **cad-idr** <> CAD/IDR - Canadian Dollar Indonesian Rupiah
* **cad-ils** <> CAD/ILS - Canadian Dollar Israeli Shekel
* **cad-inr** <> CAD/INR - Canadian Dollar Indian Rupee
* **cad-krw** <> CAD/KRW - Canadian Dollar Korean Won
* **cad-kwd** <> CAD/KWD - Canadian Dollar Kuwaiti Dinar
* **cad-mxn** <> CAD/MXN - Canadian Dollar Mexican Peso
* **cad-myr** <> CAD/MYR - Canadian Dollar Malaysian Ringgit
* **cad-nzd** <> CAD/NZD - Canadian Dollar New Zealand Dollar
* **cad-pkr** <> CAD/PKR - Canadian Dollar Pakistani Rupee
* **cad-thb** <> CAD/THB - Canadian Dollar Thai Baht
* **cad-twd** <> CAD/TWD - Canadian Dollar Taiwan Dollar
* **cad-usd** <> CAD/USD - Canadian Dollar US Dollar
* **cad-zar** <> CAD/ZAR - Canadian Dollar South African Rand
* **chf-aed** <> CHF/AED - Swiss Franc UAE Dirham
* **chf-ars** <> CHF/ARS - Swiss Franc Argentinian Peso
* **chf-aud** <> CHF/AUD - Swiss Franc Australian Dollar
* **chf-bgn** <> CHF/BGN - Swiss Franc Bulgarian Lev
* **chf-brl** <> CHF/BRL - Swiss Franc Brazil Real
* **chf-cad** <> CHF/CAD - Swiss Franc Canadian Dollar
* **chf-cny** <> CHF/CNY - Swiss Franc Chinese Yuan
* **chf-eur** <> CHF/EUR - Swiss Franc Euro
* **chf-gbp** <> CHF/GBP - Swiss Franc British Pound
* **chf-idr** <> CHF/IDR - Swiss Franc Indonesian Rupiah
* **chf-ils** <> CHF/ILS - Swiss Franc Israeli Shekel
* **chf-inr** <> CHF/INR - Swiss Franc Indian Rupee
* **chf-krw** <> CHF/KRW - Swiss Franc Korean Won
* **chf-mxn** <> CHF/MXN - Swiss Franc Mexican Peso
* **chf-myr** <> CHF/MYR - Swiss Franc Malaysian Ringgit
* **chf-nzd** <> CHF/NZD - Swiss Franc New Zealand Dollar
* **chf-thb** <> CHF/THB - Swiss Franc Thai Baht
* **chf-twd** <> CHF/TWD - Swiss Franc Taiwan Dollar
* **chf-usd** <> CHF/USD - Swiss Franc US Dollar
* **cny-dkk** <> CNY/DKK - Chinese Yuan Danish Krone
* **cny-hkd** <> CNY/HKD - Chinese Yuan Hong Kong Dollar
* **cny-jpy** <> CNY/JPY - Chinese Yuan Japanese Yen
* **cny-zar** <> CNY/ZAR - Chinese Yuan South African Rand
* **czk-sek** <> CZK/SEK - Czech Koruna Swedish Krona
* **dkk-aed** <> DKK/AED - Danish Krone UAE Dirham
* **dkk-bgn** <> DKK/BGN - Danish Krone Bulgarian Lev
* **dkk-chf** <> DKK/CHF - Danish Krone Swiss Franc
* **dkk-cny** <> DKK/CNY - Danish Krone Chinese Yuan
* **dkk-cop** <> DKK/COP - Danish Krone Colombian Peso
* **dkk-eek** <> DKK/EEK - Danish Krone Estonian Krone
* **dkk-hkd** <> DKK/HKD - Danish Krone Hong Kong Dollar
* **dkk-inr** <> DKK/INR - Danish Krone Indian Rupee
* **dkk-isk** <> DKK/ISK - Danish Krone Icelandic Kr
* **dkk-mxn** <> DKK/MXN - Danish Krone Mexican Peso
* **dkk-myr** <> DKK/MYR - Danish Krone Malaysian Ringgit
* **dkk-nok** <> DKK/NOK - Danish Krone Norwegian Krone
* **dkk-php** <> DKK/PHP - Danish Krone Philippine Peso
* **dkk-twd** <> DKK/TWD - Danish Krone Taiwan Dollar
* **dkk-uah** <> DKK/UAH - Danish Krone Ukrainian Hryvnia
* **eek-dkk** <> EEK/DKK - Estonian Krone Danish Krone
* **egp-pkr** <> EGP/PKR - Egyptian Pound Pakistani Rupee
* **eur-aed** <> EUR/AED - Euro UAE Dirham
* **eur-afn** <> EUR/AFN - Euro Afghanistan Afghani
* **eur-all** <> EUR/ALL - Euro Albanian Lek
* **eur-ang** <> EUR/ANG - Euro Antilles Guilder
* **eur-ars** <> EUR/ARS - Euro Argentinian Peso
* **eur-bam** <> EUR/BAM - Euro Bosnia Herzegovina Mark
* **eur-bbd** <> EUR/BBD - Euro Barbadian Dollar
* **eur-bdt** <> EUR/BDT - Euro Bangladeshi Taka
* **eur-bgn** <> EUR/BGN - Euro Bulgarian Lev
* **eur-bhd** <> EUR/BHD - Euro Baharain Dinar
* **eur-bif** <> EUR/BIF - Euro Burundian Franc
* **eur-bnd** <> EUR/BND - Euro Brunei Dollar
* **eur-bob** <> EUR/BOB - Euro Bolivian Boliviano
* **eur-brl** <> EUR/BRL - Euro Brazil Real
* **eur-bsd** <> EUR/BSD - Euro Bahamas Dollar
* **eur-bwp** <> EUR/BWP - Euro Botswana Pula
* **eur-byr** <> EUR/BYR - Euro Belarusian Ruble
* **eur-bzd** <> EUR/BZD - Euro Belize Dollar
* **eur-clp** <> EUR/CLP - Euro Chilean Peso
* **eur-cny** <> EUR/CNY - Euro Chinese Yuan
* **eur-cop** <> EUR/COP - Euro Colombian Peso
* **eur-crc** <> EUR/CRC - Euro Costa Rican Colon
* **eur-cup** <> EUR/CUP - Euro Cuban Peso
* **eur-cve** <> EUR/CVE - Euro Cape Verdean Escudo
* **eur-djf** <> EUR/DJF - Euro Djiboutian Franc
* **eur-dop** <> EUR/DOP - Euro Dominican Peso
* **eur-dzd** <> EUR/DZD - Euro Algerian Dinar
* **eur-eek** <> EUR/EEK - Euro Estonian Krone
* **eur-egp** <> EUR/EGP - Euro Egyptian Pound
* **eur-etb** <> EUR/ETB - Euro Ethiopian Birr
* **eur-fjd** <> EUR/FJD - Euro Fiji Dollar
* **eur-ghs** <> EUR/GHS - Euro Ghanaian Cedi
* **eur-gmd** <> EUR/GMD - Euro Gambian Dalasi
* **eur-gnf** <> EUR/GNF - Euro Guinean Franc
* **eur-gtq** <> EUR/GTQ - Euro Guatemalan Quetzal
* **eur-hnl** <> EUR/HNL - Euro Honduran Lempira
* **eur-hrk** <> EUR/HRK - Euro Croatian Kuna
* **eur-htg** <> EUR/HTG - Euro Haitian Gourde
* **eur-idr** <> EUR/IDR - Euro Indonesian Rupiah
* **eur-inr** <> EUR/INR - Euro Indian Rupee
* **eur-iqd** <> EUR/IQD - Euro Iraqi Dinar
* **eur-irr** <> EUR/IRR - Euro Iranian Rial
* **eur-isk** <> EUR/ISK - Euro Icelandic Kr
* **eur-jmd** <> EUR/JMD - Euro Jamaican Dollar
* **eur-jod** <> EUR/JOD - Euro Jordan Dinar
* **eur-kes** <> EUR/KES - Euro Kenyan Shilling
* **eur-khr** <> EUR/KHR - Euro Cambodian Riel
* **eur-kwd** <> EUR/KWD - Euro Kuwaiti Dinar
* **eur-kyd** <> EUR/KYD - Euro Cayman Islands Dollar
* **eur-kzt** <> EUR/KZT - Euro Kazakh Tenge
* **eur-lak** <> EUR/LAK - Euro Lao Kip
* **eur-lbp** <> EUR/LBP - Euro Lebanese Pound
* **eur-lkr** <> EUR/LKR - Euro Sri Lankan Rupee
* **eur-lsl** <> EUR/LSL - Euro Lesotho loti
* **eur-ltl** <> EUR/LTL - Euro Lithuanian Litas
* **eur-lvl** <> EUR/LVL - Euro
* **eur-lyd** <> EUR/LYD - Euro Libyan Dinar
* **eur-mad** <> EUR/MAD - Euro Moroccan Dirham
* **eur-mdl** <> EUR/MDL - Euro Moldovan Leu
* **eur-mga** <> EUR/MGA - Euro Malagasy Ariary
* **eur-mkd** <> EUR/MKD - Euro Macedonian Denar
* **eur-mmk** <> EUR/MMK - Euro Myanmar kyat
* **eur-mop** <> EUR/MOP - Euro Macanese Pataca
* **eur-mro** <> EUR/MRO - Euro Mauritanian ouguiya
* **eur-mur** <> EUR/MUR - Euro Mauritian Rupee
* **eur-mwk** <> EUR/MWK - Euro Malawian Kwacha
* **eur-myr** <> EUR/MYR - Euro Malaysian Ringgit
* **eur-nad** <> EUR/NAD - Euro Namibian Dollar
* **eur-ngn** <> EUR/NGN - Euro Nigerian Naira
* **eur-nio** <> EUR/NIO - Euro Nicaraguan Córdoba
* **eur-npr** <> EUR/NPR - Euro Nepalese Rupee
* **eur-omr** <> EUR/OMR - Euro Omani Rial
* **eur-pab** <> EUR/PAB - Euro Panamanian Balboa
* **eur-pen** <> EUR/PEN - Euro Peru Sol
* **eur-pgk** <> EUR/PGK - Euro Papua New Guinean Kina
* **eur-php** <> EUR/PHP - Euro Philippine Peso
* **eur-pkr** <> EUR/PKR - Euro Pakistani Rupee
* **eur-pyg** <> EUR/PYG - Euro Paraguayan Guarani
* **eur-qar** <> EUR/QAR - Euro Qatari Riyal
* **eur-ron** <> EUR/RON - Euro Romanian Leu
* **eur-rsd** <> EUR/RSD - Euro Serbian Dinar
* **eur-rub** <> EUR/RUB - Euro Russian Ruble
* **eur-rwf** <> EUR/RWF - Euro Rwandan Franc
* **eur-sar** <> EUR/SAR - Euro Saudi Riyal
* **eur-scr** <> EUR/SCR - Euro Seychelles Rupee
* **eur-sdg** <> EUR/SDG - Euro Sudanese Pound
* **eur-sdr** <> EUR/SDR - Euro Special Drawing Rights
* **eur-sos** <> EUR/SOS - Euro Somali Shilling
* **eur-std** <> EUR/STD - Euro São Tomé/Príncipe Dobra
* **eur-svc** <> EUR/SVC - Euro El Salvador Colon
* **eur-syp** <> EUR/SYP - Euro Syrian Pound
* **eur-szl** <> EUR/SZL - Euro Swazi Lilangeni
* **eur-tnd** <> EUR/TND - Euro Tunisian Dinar
* **eur-ttd** <> EUR/TTD - Euro Trinidad Dollar
* **eur-twd** <> EUR/TWD - Euro Taiwan Dollar
* **eur-tzs** <> EUR/TZS - Euro Tanzanian Shilling
* **eur-uah** <> EUR/UAH - Euro Ukrainian Hryvnia
* **eur-ugx** <> EUR/UGX - Euro Ugandan Shilling
* **eur-uyu** <> EUR/UYU - Euro Uruguayan Peso
* **eur-uzs** <> EUR/UZS - Euro Uzbekistani Sum
* **eur-vef** <> EUR/VEF - Euro Venezuelan Bolivar
* **eur-vnd** <> EUR/VND - Euro Vietnamese Dong
* **eur-xaf** <> EUR/XAF - Euro Central African Franc
* **eur-xof** <> EUR/XOF - Euro West African CFA franc
* **eur-xpf** <> EUR/XPF - Euro French Pacific Franc
* **eur-zmk** <> EUR/ZMK - Euro Zambia Kwacha
* **fjd-usd** <> FJD/USD - Fiji Dollar US Dollar
* **gbp-aed** <> GBP/AED - British Pound UAE Dirham
* **gbp-all** <> GBP/ALL - British Pound Albanian Lek
* **gbp-ars** <> GBP/ARS - British Pound Argentinian Peso
* **gbp-bbd** <> GBP/BBD - British Pound Barbadian Dollar
* **gbp-bdt** <> GBP/BDT - British Pound Bangladeshi Taka
* **gbp-bgn** <> GBP/BGN - British Pound Bulgarian Lev
* **gbp-bhd** <> GBP/BHD - British Pound Baharain Dinar
* **gbp-bif** <> GBP/BIF - British Pound Burundian Franc
* **gbp-bnd** <> GBP/BND - British Pound Brunei Dollar
* **gbp-brl** <> GBP/BRL - British Pound Brazil Real
* **gbp-bsd** <> GBP/BSD - British Pound Bahamas Dollar
* **gbp-bwp** <> GBP/BWP - British Pound Botswana Pula
* **gbp-clp** <> GBP/CLP - British Pound Chilean Peso
* **gbp-cny** <> GBP/CNY - British Pound Chinese Yuan
* **gbp-cop** <> GBP/COP - British Pound Colombian Peso
* **gbp-crc** <> GBP/CRC - British Pound Costa Rican Colon
* **gbp-djf** <> GBP/DJF - British Pound Djiboutian Franc
* **gbp-dop** <> GBP/DOP - British Pound Dominican Peso
* **gbp-dzd** <> GBP/DZD - British Pound Algerian Dinar
* **gbp-eek** <> GBP/EEK - British Pound Estonian Krone
* **gbp-egp** <> GBP/EGP - British Pound Egyptian Pound
* **gbp-etb** <> GBP/ETB - British Pound Ethiopian Birr
* **gbp-eur** <> GBP/EUR - British Pound Euro
* **gbp-fjd** <> GBP/FJD - British Pound Fiji Dollar
* **gbp-gmd** <> GBP/GMD - British Pound Gambian Dalasi
* **gbp-gtq** <> GBP/GTQ - British Pound Guatemalan Quetzal
* **gbp-hnl** <> GBP/HNL - British Pound Honduran Lempira
* **gbp-hrk** <> GBP/HRK - British Pound Croatian Kuna
* **gbp-htg** <> GBP/HTG - British Pound Haitian Gourde
* **gbp-idr** <> GBP/IDR - British Pound Indonesian Rupiah
* **gbp-inr** <> GBP/INR - British Pound Indian Rupee
* **gbp-iqd** <> GBP/IQD - British Pound Iraqi Dinar
* **gbp-irr** <> GBP/IRR - British Pound Iranian Rial
* **gbp-isk** <> GBP/ISK - British Pound Icelandic Kr
* **gbp-jmd** <> GBP/JMD - British Pound Jamaican Dollar
* **gbp-jod** <> GBP/JOD - British Pound Jordan Dinar
* **gbp-kes** <> GBP/KES - British Pound Kenyan Shilling
* **gbp-krw** <> GBP/KRW - British Pound Korean Won
* **gbp-kwd** <> GBP/KWD - British Pound Kuwaiti Dinar
* **gbp-kzt** <> GBP/KZT - British Pound Kazakh Tenge
* **gbp-lbp** <> GBP/LBP - British Pound Lebanese Pound
* **gbp-lkr** <> GBP/LKR - British Pound Sri Lankan Rupee
* **gbp-ltl** <> GBP/LTL - British Pound Lithuanian Litas
* **gbp-lvl** <> GBP/LVL - British Pound
* **gbp-mad** <> GBP/MAD - British Pound Moroccan Dirham
* **gbp-mur** <> GBP/MUR - British Pound Mauritian Rupee
* **gbp-mwk** <> GBP/MWK - British Pound Malawian Kwacha
* **gbp-mxn** <> GBP/MXN - British Pound Mexican Peso
* **gbp-myr** <> GBP/MYR - British Pound Malaysian Ringgit
* **gbp-ngn** <> GBP/NGN - British Pound Nigerian Naira
* **gbp-nio** <> GBP/NIO - British Pound Nicaraguan Córdoba
* **gbp-omr** <> GBP/OMR - British Pound Omani Rial
* **gbp-pen** <> GBP/PEN - British Pound Peru Sol
* **gbp-pgk** <> GBP/PGK - British Pound Papua New Guinean Kina
* **gbp-php** <> GBP/PHP - British Pound Philippine Peso
* **gbp-pkr** <> GBP/PKR - British Pound Pakistani Rupee
* **gbp-qar** <> GBP/QAR - British Pound Qatari Riyal
* **gbp-ron** <> GBP/RON - British Pound Romanian Leu
* **gbp-rub** <> GBP/RUB - British Pound Russian Ruble
* **gbp-sar** <> GBP/SAR - British Pound Saudi Riyal
* **gbp-scr** <> GBP/SCR - British Pound Seychelles Rupee
* **gbp-szl** <> GBP/SZL - British Pound Swazi Lilangeni
* **gbp-tnd** <> GBP/TND - British Pound Tunisian Dinar
* **gbp-ttd** <> GBP/TTD - British Pound Trinidad Dollar
* **gbp-twd** <> GBP/TWD - British Pound Taiwan Dollar
* **gbp-tzs** <> GBP/TZS - British Pound Tanzanian Shilling
* **gbp-uah** <> GBP/UAH - British Pound Ukrainian Hryvnia
* **gbp-ugx** <> GBP/UGX - British Pound Ugandan Shilling
* **gbp-vnd** <> GBP/VND - British Pound Vietnamese Dong
* **gbp-xaf** <> GBP/XAF - British Pound Central African Franc
* **gbp-xpf** <> GBP/XPF - British Pound French Pacific Franc
* **gbp-zmk** <> GBP/ZMK - British Pound Zambia Kwacha
* **ghs-eur** <> GHS/EUR - Ghanaian Cedi Euro
* **ghs-usd** <> GHS/USD - Ghanaian Cedi US Dollar
* **hkd-ars** <> HKD/ARS - Hong Kong Dollar Argentinian Peso
* **hkd-cny** <> HKD/CNY - Hong Kong Dollar Chinese Yuan
* **hkd-dkk** <> HKD/DKK - Hong Kong Dollar Danish Krone
* **hkd-idr** <> HKD/IDR - Hong Kong Dollar Indonesian Rupiah
* **hkd-inr** <> HKD/INR - Hong Kong Dollar Indian Rupee
* **hkd-krw** <> HKD/KRW - Hong Kong Dollar Korean Won
* **hkd-mxn** <> HKD/MXN - Hong Kong Dollar Mexican Peso
* **hkd-myr** <> HKD/MYR - Hong Kong Dollar Malaysian Ringgit
* **hkd-pkr** <> HKD/PKR - Hong Kong Dollar Pakistani Rupee
* **hkd-pln** <> HKD/PLN - Hong Kong Dollar Polish Zloty
* **hkd-thb** <> HKD/THB - Hong Kong Dollar Thai Baht
* **hkd-twd** <> HKD/TWD - Hong Kong Dollar Taiwan Dollar
* **hkd-zar** <> HKD/ZAR - Hong Kong Dollar South African Rand
* **idr-cad** <> IDR/CAD - Indonesian Rupiah Canadian Dollar
* **idr-cny** <> IDR/CNY - Indonesian Rupiah Chinese Yuan
* **idr-inr** <> IDR/INR - Indonesian Rupiah Indian Rupee
* **idr-jpy** <> IDR/JPY - Indonesian Rupiah Japanese Yen
* **idr-krw** <> IDR/KRW - Indonesian Rupiah Korean Won
* **idr-thb** <> IDR/THB - Indonesian Rupiah Thai Baht
* **idr-twd** <> IDR/TWD - Indonesian Rupiah Taiwan Dollar
* **ils-jpy** <> ILS/JPY - Israeli Shekel Japanese Yen
* **inr-cny** <> INR/CNY - Indian Rupee Chinese Yuan
* **inr-jpy** <> INR/JPY - Indian Rupee Japanese Yen
* **inr-krw** <> INR/KRW - Indian Rupee Korean Won
* **inr-pkr** <> INR/PKR - Indian Rupee Pakistani Rupee
* **inr-thb** <> INR/THB - Indian Rupee Thai Baht
* **inr-twd** <> INR/TWD - Indian Rupee Taiwan Dollar
* **isk-chf** <> ISK/CHF - Icelandic Kr Swiss Franc
* **jod-ils** <> JOD/ILS - Jordan Dinar Israeli Shekel
* **jpy-aed** <> JPY/AED - Japanese Yen UAE Dirham
* **jpy-ars** <> JPY/ARS - Japanese Yen Argentinian Peso
* **jpy-aud** <> JPY/AUD - Japanese Yen Australian Dollar
* **jpy-brl** <> JPY/BRL - Japanese Yen Brazil Real
* **jpy-cad** <> JPY/CAD - Japanese Yen Canadian Dollar
* **jpy-chf** <> JPY/CHF - Japanese Yen Swiss Franc
* **jpy-cny** <> JPY/CNY - Japanese Yen Chinese Yuan
* **jpy-dkk** <> JPY/DKK - Japanese Yen Danish Krone
* **jpy-eur** <> JPY/EUR - Japanese Yen Euro
* **jpy-gbp** <> JPY/GBP - Japanese Yen British Pound
* **jpy-hkd** <> JPY/HKD - Japanese Yen Hong Kong Dollar
* **jpy-idr** <> JPY/IDR - Japanese Yen Indonesian Rupiah
* **jpy-ils** <> JPY/ILS - Japanese Yen Israeli Shekel
* **jpy-inr** <> JPY/INR - Japanese Yen Indian Rupee
* **jpy-mxn** <> JPY/MXN - Japanese Yen Mexican Peso
* **jpy-myr** <> JPY/MYR - Japanese Yen Malaysian Ringgit
* **jpy-nok** <> JPY/NOK - Japanese Yen Norwegian Krone
* **jpy-nzd** <> JPY/NZD - Japanese Yen New Zealand Dollar
* **jpy-pkr** <> JPY/PKR - Japanese Yen Pakistani Rupee
* **jpy-pln** <> JPY/PLN - Japanese Yen Polish Zloty
* **jpy-sek** <> JPY/SEK - Japanese Yen Swedish Krona
* **jpy-thb** <> JPY/THB - Japanese Yen Thai Baht
* **jpy-twd** <> JPY/TWD - Japanese Yen Taiwan Dollar
* **jpy-usd** <> JPY/USD - Japanese Yen US Dollar
* **jpy-zar** <> JPY/ZAR - Japanese Yen South African Rand
* **krw-cny** <> KRW/CNY - Korean Won Chinese Yuan
* **krw-hkd** <> KRW/HKD - Korean Won Hong Kong Dollar
* **krw-idr** <> KRW/IDR - Korean Won Indonesian Rupiah
* **krw-inr** <> KRW/INR - Korean Won Indian Rupee
* **krw-jpy** <> KRW/JPY - Korean Won Japanese Yen
* **krw-myr** <> KRW/MYR - Korean Won Malaysian Ringgit
* **krw-thb** <> KRW/THB - Korean Won Thai Baht
* **krw-twd** <> KRW/TWD - Korean Won Taiwan Dollar
* **krw-zar** <> KRW/ZAR - Korean Won South African Rand
* **kwd-gbp** <> KWD/GBP - Kuwaiti Dinar British Pound
* **kwd-pkr** <> KWD/PKR - Kuwaiti Dinar Pakistani Rupee
* **kyd-usd** <> KYD/USD - Cayman Islands Dollar US Dollar
* **mxn-dkk** <> MXN/DKK - Mexican Peso Danish Krone
* **mxn-hkd** <> MXN/HKD - Mexican Peso Hong Kong Dollar
* **mxn-zar** <> MXN/ZAR - Mexican Peso South African Rand
* **myr-cny** <> MYR/CNY - Malaysian Ringgit Chinese Yuan
* **myr-dkk** <> MYR/DKK - Malaysian Ringgit Danish Krone
* **myr-hkd** <> MYR/HKD - Malaysian Ringgit Hong Kong Dollar
* **myr-idr** <> MYR/IDR - Malaysian Ringgit Indonesian Rupiah
* **myr-inr** <> MYR/INR - Malaysian Ringgit Indian Rupee
* **myr-jpy** <> MYR/JPY - Malaysian Ringgit Japanese Yen
* **myr-krw** <> MYR/KRW - Malaysian Ringgit Korean Won
* **myr-nzd** <> MYR/NZD - Malaysian Ringgit New Zealand Dollar
* **myr-pkr** <> MYR/PKR - Malaysian Ringgit Pakistani Rupee
* **myr-sgd** <> MYR/SGD - Malaysian Ringgit Singapore Dollar
* **myr-thb** <> MYR/THB - Malaysian Ringgit Thai Baht
* **myr-twd** <> MYR/TWD - Malaysian Ringgit Taiwan Dollar
* **myr-zar** <> MYR/ZAR - Malaysian Ringgit South African Rand
* **nok-chf** <> NOK/CHF - Norwegian Krone Swiss Franc
* **nok-inr** <> NOK/INR - Norwegian Krone Indian Rupee
* **nzd-aud** <> NZD/AUD - New Zealand Dollar Australian Dollar
* **nzd-cny** <> NZD/CNY - New Zealand Dollar Chinese Yuan
* **nzd-eur** <> NZD/EUR - New Zealand Dollar Euro
* **nzd-gbp** <> NZD/GBP - New Zealand Dollar British Pound
* **nzd-idr** <> NZD/IDR - New Zealand Dollar Indonesian Rupiah
* **nzd-inr** <> NZD/INR - New Zealand Dollar Indian Rupee
* **nzd-krw** <> NZD/KRW - New Zealand Dollar Korean Won
* **nzd-myr** <> NZD/MYR - New Zealand Dollar Malaysian Ringgit
* **nzd-pkr** <> NZD/PKR - New Zealand Dollar Pakistani Rupee
* **nzd-twd** <> NZD/TWD - New Zealand Dollar Taiwan Dollar
* **omr-gbp** <> OMR/GBP - Omani Rial British Pound
* **omr-pkr** <> OMR/PKR - Omani Rial Pakistani Rupee
* **pln-dkk** <> PLN/DKK - Polish Zloty Danish Krone
* **qar-pkr** <> QAR/PKR - Qatari Riyal Pakistani Rupee
* **sar-pkr** <> SAR/PKR - Saudi Riyal Pakistani Rupee
* **sek-chf** <> SEK/CHF - Swedish Krona Swiss Franc
* **sek-czk** <> SEK/CZK - Swedish Krona Czech Koruna
* **sek-dkk** <> SEK/DKK - Swedish Krona Danish Krone
* **sek-inr** <> SEK/INR - Swedish Krona Indian Rupee
* **sek-isk** <> SEK/ISK - Swedish Krona Icelandic Kr
* **sek-nok** <> SEK/NOK - Swedish Krona Norwegian Krone
* **sgd-ars** <> SGD/ARS - Singapore Dollar Argentinian Peso
* **sgd-aud** <> SGD/AUD - Singapore Dollar Australian Dollar
* **sgd-brl** <> SGD/BRL - Singapore Dollar Brazil Real
* **sgd-cad** <> SGD/CAD - Singapore Dollar Canadian Dollar
* **sgd-chf** <> SGD/CHF - Singapore Dollar Swiss Franc
* **sgd-cny** <> SGD/CNY - Singapore Dollar Chinese Yuan
* **sgd-dkk** <> SGD/DKK - Singapore Dollar Danish Krone
* **sgd-eur** <> SGD/EUR - Singapore Dollar Euro
* **sgd-gbp** <> SGD/GBP - Singapore Dollar British Pound
* **sgd-idr** <> SGD/IDR - Singapore Dollar Indonesian Rupiah
* **sgd-inr** <> SGD/INR - Singapore Dollar Indian Rupee
* **sgd-krw** <> SGD/KRW - Singapore Dollar Korean Won
* **sgd-mxn** <> SGD/MXN - Singapore Dollar Mexican Peso
* **sgd-myr** <> SGD/MYR - Singapore Dollar Malaysian Ringgit
* **sgd-nzd** <> SGD/NZD - Singapore Dollar New Zealand Dollar
* **sgd-pkr** <> SGD/PKR - Singapore Dollar Pakistani Rupee
* **sgd-pln** <> SGD/PLN - Singapore Dollar Polish Zloty
* **sgd-thb** <> SGD/THB - Singapore Dollar Thai Baht
* **sgd-twd** <> SGD/TWD - Singapore Dollar Taiwan Dollar
* **sgd-usd** <> SGD/USD - Singapore Dollar US Dollar
* **sgd-zar** <> SGD/ZAR - Singapore Dollar South African Rand
* **thb-cny** <> THB/CNY - Thai Baht Chinese Yuan
* **thb-idr** <> THB/IDR - Thai Baht Indonesian Rupiah
* **thb-inr** <> THB/INR - Thai Baht Indian Rupee
* **thb-krw** <> THB/KRW - Thai Baht Korean Won
* **thb-pkr** <> THB/PKR - Thai Baht Pakistani Rupee
* **thb-twd** <> THB/TWD - Thai Baht Taiwan Dollar
* **tnd-gbp** <> TND/GBP - Tunisian Dinar British Pound
* **try-chf** <> TRY/CHF - Turkish Lira Swiss Franc
* **try-zar** <> TRY/ZAR - Turkish Lira South African Rand
* **twd-cny** <> TWD/CNY - Taiwan Dollar Chinese Yuan
* **twd-idr** <> TWD/IDR - Taiwan Dollar Indonesian Rupiah
* **twd-inr** <> TWD/INR - Taiwan Dollar Indian Rupee
* **twd-jpy** <> TWD/JPY - Taiwan Dollar Japanese Yen
* **twd-krw** <> TWD/KRW - Taiwan Dollar Korean Won
* **twd-pkr** <> TWD/PKR - Taiwan Dollar Pakistani Rupee
* **twd-thb** <> TWD/THB - Taiwan Dollar Thai Baht
* **uah-dkk** <> UAH/DKK - Ukrainian Hryvnia Danish Krone
* **usd-all** <> USD/ALL - US Dollar Albanian Lek
* **usd-amd** <> USD/AMD - US Dollar Armenian Dram
* **usd-ang** <> USD/ANG - US Dollar Antilles Guilder
* **usd-ars** <> USD/ARS - US Dollar Argentinian Peso
* **usd-aud** <> USD/AUD - US Dollar Australian Dollar
* **usd-bbd** <> USD/BBD - US Dollar Barbadian Dollar
* **usd-bdt** <> USD/BDT - US Dollar Bangladeshi Taka
* **usd-bgn** <> USD/BGN - US Dollar Bulgarian Lev
* **usd-bhd** <> USD/BHD - US Dollar Baharain Dinar
* **usd-bif** <> USD/BIF - US Dollar Burundian Franc
* **usd-bnd** <> USD/BND - US Dollar Brunei Dollar
* **usd-bob** <> USD/BOB - US Dollar Bolivian Boliviano
* **usd-brl** <> USD/BRL - US Dollar Brazil Real
* **usd-bsd** <> USD/BSD - US Dollar Bahamas Dollar
* **usd-bwp** <> USD/BWP - US Dollar Botswana Pula
* **usd-bzd** <> USD/BZD - US Dollar Belize Dollar
* **usd-clp** <> USD/CLP - US Dollar Chilean Peso
* **usd-cny** <> USD/CNY - US Dollar Chinese Yuan
* **usd-cop** <> USD/COP - US Dollar Colombian Peso
* **usd-crc** <> USD/CRC - US Dollar Costa Rican Colon
* **usd-cup** <> USD/CUP - US Dollar Cuban Peso
* **usd-cve** <> USD/CVE - US Dollar Cape Verdean Escudo
* **usd-djf** <> USD/DJF - US Dollar Djiboutian Franc
* **usd-dop** <> USD/DOP - US Dollar Dominican Peso
* **usd-dzd** <> USD/DZD - US Dollar Algerian Dinar
* **usd-eek** <> USD/EEK - US Dollar Estonian Krone
* **usd-egp** <> USD/EGP - US Dollar Egyptian Pound
* **usd-etb** <> USD/ETB - US Dollar Ethiopian Birr
* **usd-eur** <> USD/EUR - US Dollar Euro
* **usd-fjd** <> USD/FJD - US Dollar Fiji Dollar
* **usd-gbp** <> USD/GBP - US Dollar British Pound
* **usd-gel** <> USD/GEL - US Dollar Georgian lari
* **usd-ghs** <> USD/GHS - US Dollar Ghanaian Cedi
* **usd-gmd** <> USD/GMD - US Dollar Gambian Dalasi
* **usd-gnf** <> USD/GNF - US Dollar Guinean Franc
* **usd-gtq** <> USD/GTQ - US Dollar Guatemalan Quetzal
* **usd-hnl** <> USD/HNL - US Dollar Honduran Lempira
* **usd-hrk** <> USD/HRK - US Dollar Croatian Kuna
* **usd-htg** <> USD/HTG - US Dollar Haitian Gourde
* **usd-idr** <> USD/IDR - US Dollar Indonesian Rupiah
* **usd-iqd** <> USD/IQD - US Dollar Iraqi Dinar
* **usd-irr** <> USD/IRR - US Dollar Iranian Rial
* **usd-isk** <> USD/ISK - US Dollar Icelandic Kr
* **usd-jmd** <> USD/JMD - US Dollar Jamaican Dollar
* **usd-kes** <> USD/KES - US Dollar Kenyan Shilling
* **usd-khr** <> USD/KHR - US Dollar Cambodian Riel
* **usd-kmf** <> USD/KMF - US Dollar Comorian Franc
* **usd-kzt** <> USD/KZT - US Dollar Kazakh Tenge
* **usd-lak** <> USD/LAK - US Dollar Lao Kip
* **usd-lbp** <> USD/LBP - US Dollar Lebanese Pound
* **usd-lkr** <> USD/LKR - US Dollar Sri Lankan Rupee
* **usd-lsl** <> USD/LSL - US Dollar Lesotho loti
* **usd-ltl** <> USD/LTL - US Dollar Lithuanian Litas
* **usd-lvl** <> USD/LVL - US Dollar
* **usd-lyd** <> USD/LYD - US Dollar Libyan Dinar
* **usd-mad** <> USD/MAD - US Dollar Moroccan Dirham
* **usd-mdl** <> USD/MDL - US Dollar Moldovan Leu
* **usd-mga** <> USD/MGA - US Dollar Malagasy Ariary
* **usd-mkd** <> USD/MKD - US Dollar Macedonian Denar
* **usd-mmk** <> USD/MMK - US Dollar Myanmar kyat
* **usd-mop** <> USD/MOP - US Dollar Macanese Pataca
* **usd-mro** <> USD/MRO - US Dollar Mauritanian ouguiya
* **usd-mur** <> USD/MUR - US Dollar Mauritian Rupee
* **usd-mvr** <> USD/MVR - US Dollar Maldivian Rufiyaa
* **usd-mwk** <> USD/MWK - US Dollar Malawian Kwacha
* **usd-myr** <> USD/MYR - US Dollar Malaysian Ringgit
* **usd-nad** <> USD/NAD - US Dollar Namibian Dollar
* **usd-ngn** <> USD/NGN - US Dollar Nigerian Naira
* **usd-nio** <> USD/NIO - US Dollar Nicaraguan Córdoba
* **usd-npr** <> USD/NPR - US Dollar Nepalese Rupee
* **usd-nzd** <> USD/NZD - US Dollar New Zealand Dollar
* **usd-omr** <> USD/OMR - US Dollar Omani Rial
* **usd-pab** <> USD/PAB - US Dollar Panamanian Balboa
* **usd-pen** <> USD/PEN - US Dollar Peru Sol
* **usd-pgk** <> USD/PGK - US Dollar Papua New Guinean Kina
* **usd-php** <> USD/PHP - US Dollar Philippine Peso
* **usd-pkr** <> USD/PKR - US Dollar Pakistani Rupee
* **usd-pyg** <> USD/PYG - US Dollar Paraguayan Guarani
* **usd-qar** <> USD/QAR - US Dollar Qatari Riyal
* **usd-ron** <> USD/RON - US Dollar Romanian Leu
* **usd-rsd** <> USD/RSD - US Dollar Serbian Dinar
* **usd-rub** <> USD/RUB - US Dollar Russian Ruble
* **usd-rwf** <> USD/RWF - US Dollar Rwandan Franc
* **usd-scr** <> USD/SCR - US Dollar Seychelles Rupee
* **usd-sdg** <> USD/SDG - US Dollar Sudanese Pound
* **usd-sos** <> USD/SOS - US Dollar Somali Shilling
* **usd-std** <> USD/STD - US Dollar São Tomé/Príncipe Dobra
* **usd-svc** <> USD/SVC - US Dollar El Salvador Colon
* **usd-syp** <> USD/SYP - US Dollar Syrian Pound
* **usd-szl** <> USD/SZL - US Dollar Swazi Lilangeni
* **usd-tnd** <> USD/TND - US Dollar Tunisian Dinar
* **usd-ttd** <> USD/TTD - US Dollar Trinidad Dollar
* **usd-twd** <> USD/TWD - US Dollar Taiwan Dollar
* **usd-tzs** <> USD/TZS - US Dollar Tanzanian Shilling
* **usd-uah** <> USD/UAH - US Dollar Ukrainian Hryvnia
* **usd-ugx** <> USD/UGX - US Dollar Ugandan Shilling
* **usd-uyu** <> USD/UYU - US Dollar Uruguayan Peso
* **usd-uzs** <> USD/UZS - US Dollar Uzbekistani Sum
* **usd-vef** <> USD/VEF - US Dollar Venezuelan Bolivar
* **usd-vnd** <> USD/VND - US Dollar Vietnamese Dong
* **usd-vuv** <> USD/VUV - US Dollar Vanuatu vatu
* **usd-xaf** <> USD/XAF - US Dollar Central African Franc
* **usd-xcd** <> USD/XCD - US Dollar East Caribbean Dollar
* **usd-xof** <> USD/XOF - US Dollar West African CFA franc
* **usd-xpf** <> USD/XPF - US Dollar French Pacific Franc
* **usd-yer** <> USD/YER - US Dollar Yemeni Rial
* **usd-zmk** <> USD/ZMK - US Dollar Zambia Kwacha
* **vnd-xaf** <> VND/XAF - Vietnamese Dong Central African Franc
* **zar-bwp** <> ZAR/BWP - South African Rand Botswana Pula
* **zar-cny** <> ZAR/CNY - South African Rand Chinese Yuan
* **zar-dkk** <> ZAR/DKK - South African Rand Danish Krone
* **zar-hkd** <> ZAR/HKD - South African Rand Hong Kong Dollar
* **zar-idr** <> ZAR/IDR - South African Rand Indonesian Rupiah
* **zar-inr** <> ZAR/INR - South African Rand Indian Rupee
* **zar-krw** <> ZAR/KRW - South African Rand Korean Won
* **zar-myr** <> ZAR/MYR - South African Rand Malaysian Ringgit
* **zar-nok** <> ZAR/NOK - South African Rand Norwegian Krone
* **zar-php** <> ZAR/PHP - South African Rand Philippine Peso
* **zar-pkr** <> ZAR/PKR - South African Rand Pakistani Rupee
* **zar-thb** <> ZAR/THB - South African Rand Thai Baht

## License

The source code for the site is licensed under the MIT license, which you can find in
the LICENSE file.

All graphical assets are licensed under the
[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).