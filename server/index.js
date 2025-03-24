const express = require('express')
const cors = require('cors')
const fs = require('fs')

let rawdata = fs.readFileSync('db.json')

const app = express()
app.use(express.json())
app.use(cors({
  exposedHeaders: '*'
}))
app.use((req, resp, next) => {
  resp.set({
    'Cache-controll': 'no-store, no-cache, must-revalidate',
    'Pragme': 'no-cache',
    'Expries': '0'
  })
  next()
})

// GET, POST, CREATE, UPDATE, DELETE

const dbData = JSON.parse(rawdata)

let notes = dbData.notes

app.get('/api/notes', function (_, resp) {
  resp.send(notes)
})

app.get('/api/notes/:id', function (req, resp) {
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
  // dbData.notes = notes.filter(note => note.data.id !== id)
  notes = notes.filter(note => note.data.id !== id)
  fs.writeFileSync('db.json', JSON.stringify({ notes }))
  resp.send(id)
})

app.post('/api/notes', function (req, resp) {
  console.log(req.body);

  if (!req.body) return resp.sendStatus(400)
  if (notes.some(note => note.data.id === req.body.data.data.id)) {
    return resp.sendStatus(500)
  }

  const data = req.body.data
  // dbData.notes.push(data)
  notes.push(data)
  fs.writeFileSync('db.json', JSON.stringify({ notes }))
  resp.send(data)
})

app.patch('/api/notes/:id', function (req, resp) {
  if (!req.body) return resp.sendStatus(400)

  const id = req.params.id
  const data = req.body.data

  notes = notes.map(note => {
    if (note.data.id == id) {
      note.data = { ...note.data, ...data }
      return (note)
    } else {
      return note
    }
  })
  fs.writeFileSync('db.json', JSON.stringify({ notes }))
  resp.send(data)
})

app.listen(3000, function () {
  console.log('Сервер запущен');
})