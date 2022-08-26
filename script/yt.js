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

module.exports = {
  apiV1
}