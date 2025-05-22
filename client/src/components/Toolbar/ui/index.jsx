import { Box, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import BrushIcon from '@mui/icons-material/Brush'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import CircleIcon from '@mui/icons-material/Circle'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { observer } from 'mobx-react-lite'
import toolStore from '../../../store/toolStore'
import Brush from '../../../tools/Brush'
import canvasState from '../../../store/canvasState'
import Rect from '../../../tools/Rect'
import Circle from '../../../tools/Circle'
import Eraser from '../../../tools/Eraser'

const Toolbar = observer(() => {
  const colorChange = (e) => {
    toolStore.setFillColor(e.target.value)
    toolStore.setStrokeColor(e.target.value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        padding: '4px 6px',
        boxShadow: '0 1px 2px #cdcdcd'
      }}
    >
      <IconButton 
        onClick={() => toolStore.setTool(new Brush(canvasState.canvas))}
      >
        <BrushIcon />
      </IconButton>
      <IconButton 
        onClick={() => toolStore.setTool(new Rect(canvasState.canvas))}
      >
        <CropSquareIcon />
      </IconButton>
      <IconButton 
        onClick={() => toolStore.setTool(new Circle(canvasState.canvas))}
      >
        <CircleIcon />
      </IconButton>
      <IconButton 
        onClick={() => toolStore.setTool(new Eraser(canvasState.canvas))}
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>
      <IconButton >
        <HorizontalRuleIcon />
      </IconButton>
      <input type='color' onChange={(e) => colorChange(e)}/>
      <IconButton sx={{ marginLeft: 'auto' }}>
        <UndoIcon />
      </IconButton>
      <IconButton >
        <RedoIcon />
      </IconButton>
      <IconButton >
        <SaveIcon />
      </IconButton>
    </Box>
  )
})

export { Toolbar }