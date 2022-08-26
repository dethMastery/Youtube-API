let exp = require('express')
let app = exp()
let port = 1980

app.get('/', (req, res) => {
  res.send('Setting Setup Success')
})

app.listen(port, () => {
  console.log('|====================================================|');
  console.log('|                                                    |');
  console.log('|                                                    |');
  console.log(`|      App starting up @ https://localhost:${port}      |`);
  console.log('|                                                    |');
  console.log('|                                                    |');
  console.log('|====================================================|');
})