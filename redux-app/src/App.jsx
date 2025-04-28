import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, List, ListItemButton, Typography } from '@mui/material'
import { useAction } from './hooks/useAction'
// import './App.css'

function App() {
  const { cash } = useSelector((state) => state.cash)
  const { users, loading, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const { fetchUsesr } = useAction()

  const addCash = (num = 1) => {
    dispatch({ type: 'ADD_CASH', payload: num })
  }

  const getCash = (num = 1) => {
    dispatch({ type: 'GET_CASH', payload: num })
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '5px'
          }}
        >
          <Button variant='outlined' color='success' onClick={() => getCash()}>-</Button>
          <Typography variant='h6'>{cash}</Typography>
          <Button variant='outlined' color='success' onClick={() => addCash()}>+</Button>
        </Box>
        <Button
          variant='outlined'
          color={!error ? 'success' : 'error'}
          loading={loading}
          onClick={fetchUsesr}
        >
          Fetch users
        </Button>
        {!!users.length &&
          <List>
            {users.map(user => <ListItemButton key={user.id}>{user.name}</ListItemButton>)}
          </List>
        }
      </Box>
    </Box>
  )
}

export default App
