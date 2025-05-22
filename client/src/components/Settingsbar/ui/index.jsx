import { Box, TextField } from "@mui/material"
import { observer } from "mobx-react-lite"
import toolStore from "../../../store/toolStore"

const Settingsbar = observer(() => {
  return (
    <Box sx={{
      display: 'flex',
      gap: '6px',
      alignItems: 'center',
      padding: '4px 6px',
      boxShadow: '0 1px 2px #cdcdcd'
    }}>
      <TextField
        type="number"
        label='Толщина линии'
        variant="standard"
        onChange={(e) => toolStore.setLineWidth(e.target.value)}
      />
    </Box>
  )
})

export { Settingsbar }