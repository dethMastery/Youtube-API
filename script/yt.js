let {getInfo} = require('ytdl-getinfo')

function apiV1(req, res) {
  let link = req.query.link

  if(link != undefined) {
    getInfo(link).then(info => {
      res.json(info.items)
    })
  } else {
    res.send('add a link like this <br/> /api/?link=[link]')
  }
}

function apiV2(req, res) {
  res.send('<center><h1>a</h1></center>')
}

module.exports = {
  apiV1,
  apiV2
}