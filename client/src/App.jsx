import { Box } from "@mui/material"
import Toolbar from "./components/Toolbar"
import Settingsbar from "./components/Settingsbar"
import { Canvas } from "./components/Canvas"
import { Route, Routes, useNavigate, useParams } from 'react-router'
import { useEffect } from "react"

function App() {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Toolbar />
              <Settingsbar />
              <Canvas />
            </>
          }
        >
          <Route
            path=":id"
            element={
              <>
                <Toolbar />
                <Settingsbar />
                <Canvas />
              </>
            }
          />
        </Route>
      </Routes>
    </Box>
  )
}

export default App
