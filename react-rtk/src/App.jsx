import { Box, Button, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cashSlice } from './store/reducers/cashSlice'
import fetchUserData from './store/actionCreators/asyncUsers'


function App() {
  const [num, setNum] = useState(0)
  const { cash } = useSelector(state => state.cash)
  const { error, loading, users } = useSelector(state => state.users)

  const dispatch = useDispatch()

  const addCash = () => {
    dispatch(cashSlice.actions.setCash(5))
  }

  const getCash = () => {
    dispatch(cashSlice.actions.getCash(5))
  }

  const getFetchUsers = () => {
    dispatch(fetchUserData())
  }

  return (
    <Box>
      <Box>
        <Typography>Cash box</Typography>
        <Button onClick={addCash} variant='contained' color='success'>+</Button>
        <Button onClick={getCash} variant='contained' color='error'>-</Button>
        <Stack>
          <TextField value={num} onChange={(e) => setNum(e.target.value)} />
          <Button
            onClick={() => dispatch(cashSlice.actions.setCash(+num))}
            variant='outlined'
            color='primary'
          >Add cash</Button>
        </Stack>
        <Typography>{cash}</Typography>
      </Box>
      <Stack>
        <Button
          onClick={getFetchUsers}
          loading={loading}
          variant='outlined'
          color={error ? 'error' : 'success'}
        >Fetch users</Button>
        {!!users.length &&
          <List>
            {users.map(user => <ListItem key={user.id}>{user.name}</ListItem>)}
          </List>
        }
      </Stack>
    </Box>
  )
}

export default App
