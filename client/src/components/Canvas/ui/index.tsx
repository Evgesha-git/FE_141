import { Box } from "@mui/material"
import { useEffect, useRef } from "react"
import canvasState from "../../../store/canvasState"
import { observer } from "mobx-react-lite"

const Canvas = observer(() => {
  const canvasRef = useRef(null)

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
  }, [])

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
      <canvas width={600} height={400} style={{ border: '1px solid #000' }} ref={canvasRef} />
    </Box>
  )
})

export { Canvas }