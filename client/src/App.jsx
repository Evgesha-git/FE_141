import { Box } from "@mui/material"
import Toolbar from "./components/Toolbar"
import Settingsbar from "./components/Settingsbar"
import { Canvas } from "./components/Canvas"

function App() {

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Toolbar />
      <Settingsbar />
      <Canvas />
    </Box>
  )
}

export default App
