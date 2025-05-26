const express = require('express')
const WSServer = require('express-ws')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const aWss = WSServer(app).getWss()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    msg = JSON.parse(msg)

    switch (msg.method) {
      case 'connection':
        connectionHandler(ws, msg)
        break;
      case 'drow':
        broadcastConnection(ws, msg)
        break;
    }
  })
})

app.post('/image', (req, resp) => {
  try {
    const data = req.body.img?.replace('data:image/png;base64', '')
    fs.writeFileSync(path.resolve(__dirname, 'files', `${req.query.id}.png`), data, 'base64')
    return resp.status(200).json('Загружено')
  } catch (error) {
    console.log(error);
    
    return resp.status(500).json('error')
  }
})

app.get('/image', (req, resp) => {
  try {
    const file = fs.readFileSync(path.resolve(__dirname, 'files', `${req.query.id}.png`))
    const data = 'data:image/png;base64,' + file.toString('base64')
    resp.json(data)
  } catch (error) {
    return resp.status(500).json('error')
  }
})

app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))

const connectionHandler = (ws, msg) => {
  ws.id = msg.id
  broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
  aWss.clients.forEach(client => {
    if (client.id === msg.id) {
      client.send(JSON.stringify(msg))
    }
  })
}