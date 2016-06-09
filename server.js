var http = require('http')
var HttpHashRouter = require('http-hash-router')

var sendHtml = require('send-data/html')
var router = new HttpHashRouter()

var index = require('./views/index.js')

router.set('/', (req,res) => {
  sendHtml(req, res, index())
})

var server = http.createServer((req,res) => {
  router(req, res, {}, err => {
    if (err) { console.log(err)
    }
  })
})

server.listen(4000)
