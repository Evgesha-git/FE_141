const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({
  exposedHeaders: '*'
}))

// GET, POST, CREATE, UPDATE, DELETE

let notes = []

app.get('/api/notes', function (_, resp) {
  resp.send(notes)
})

app.get('/api/notes/:id', function(req, resp) {
  const id = req.params.id
  const note = notes.find(note => note.data.id === id)

  if (!note) {
    resp.status(404).send('Note not found')
  } else {
    resp.send(note)
  }
})

app.delete('/api/notes/:id', function (req, resp) {
  const id = req.params.id
  if (!id) return resp.sendStatus(500)
  notes = notes.filter(note => note.data.id !== id)
  resp.send(id)
})

app.post('/api/notes', function(req, resp) {
  console.log(req.body);

  if (!req.body) return resp.sendStatus(400)
  if (notes.some(note => note.data.id === req.body.data.data.id)) {
    return resp.sendStatus(500)
  }
  
  const data = req.body.data
  notes.push(data)
  resp.send(data)
})

app.listen(3000, function () {
  console.log('Сервер запущен');
})