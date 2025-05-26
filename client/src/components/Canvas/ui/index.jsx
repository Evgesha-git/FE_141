import { Box, Button, Modal, TextField } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import canvasState from "../../../store/canvasState"
import { observer } from "mobx-react-lite"
import { useNavigate, useParams } from "react-router"
import userStore from "../../../store/userStore"
import Brush from "../../../tools/Brush"
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
};

const Canvas = observer(() => {
  const [modal, setModal] = useState(true)
  const [userName, setUserName] = useState('')
  const canvasRef = useRef(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getImage = async () => {
      canvasState.setCanvas(canvasRef.current)
      const ctx = canvasRef.current.getContext('2d')
      const resp = await axios.get(`http://localhost:5000/image?id=${id}`)
      const data = resp.data
      const img = new Image()
      img.src = data
      img.onload = () => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height)
      }
    }

    getImage()
  }, [])

  useEffect(() => {
    if (userStore.username) {
      const socket = new WebSocket('ws://localhost:5000/')
      userStore.setSocket(socket)
      userStore.setSessionID(id)

      socket.onopen = () => {
        console.log('Подключение установлено');
        socket.send(JSON.stringify({
          id,
          username: userStore.username,
          method: 'connection'
        }))
      }

      socket.onmessage = (event) => {
        let msg = JSON.parse(event.data)
        switch (msg.method) {
          case 'connection':
            console.log(`Пользователь ${msg.username} подключился`);
            break
          case 'drow':
            drowHandler(msg)
            break
        }
      }
    }
  }, [userStore.username])

  const drowHandler = (msg) => {
    const { figure } = msg
    const ctx = canvasState.canvas.getContext('2d')
    switch (figure.type) {
      case 'brush':
        Brush.staticDraw(ctx, figure.x, figure.y)
        break
      case 'finish':
        ctx.beginPath()
    }
  }

  const mouseDownHandler = () => {
    canvasState.setUndo(canvasState.canvas.toDataURL())
    axios.post(`http://localhost:5000/image?id=${id}`, { img: canvasState.canvas.toDataURL() })
      .then(resp => console.log(resp.data))
  }

  const connectHandler = () => {
    userStore.setUserName(userName)
    setModal(false)
    if (!id) {
      const uid = crypto.randomUUID()
      navigate(`/${uid}`)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexGrow: '1'
      }}
    >
      <Modal open={modal}>
        <Box sx={style}>
          <TextField onChange={(e) => setUserName(e.target.value)} value={userName} />
          <Button variant="outlined" onClick={connectHandler}>Войти</Button>
        </Box>
      </Modal>
      <canvas width={600} height={400} style={{ border: '1px solid #000' }} ref={canvasRef} onMouseDown={mouseDownHandler} />
    </Box>
  )
})

export { Canvas }