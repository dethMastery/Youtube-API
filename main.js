let exp = require('express')
let cors = require('cors')

let setup = require('./script/setup')
let config = require('./script/config')
let yt = require('./script/yt')

let app = exp()

let cSetting = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.get('/', (req, res) => {
  res.send('<center>summonizing success</center>')
})

app.get('/api', cors(cSetting), yt.apiV1)

app.listen(config.port, () => setup.portLOG())