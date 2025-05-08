import { observer } from 'mobx-react-lite'
import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material'
import cashStore from './store/cashAStore'
import usersStore from './store/usersStore'
import { useState } from 'react'
import Timer from './Timer'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, seetError] = useState('')

  const { items } = usersStore

  const fetchData = async () => {
    try {
      setIsLoading(true)
      await usersStore.findAll()
    } catch (error) {
      seetError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box>
      <Timer time='2025-05-09T00:00:50'/>
      <Timer time='2025-05-09T01:00:50'/>
      <Timer time='2025-05-09T02:00:50'/>
      <Timer time='2025-05-09T03:00:50'/>
      <Timer time='2025-05-09T04:00:50'/>
      <Timer time='2025-05-09T05:00:50'/>
      <Timer time='2025-05-09T06:00:50'/>
      <Timer time='2025-05-09T07:00:50'/>
      <Timer time='2025-05-09T08:00:50'/>
      <Stack>
        <Button
          variant='contained'
          color='success'
          onClick={() => cashStore.setCash(5)}
        >+</Button>
        <Button
          variant='contained'
          color='error'
          onClick={() => cashStore.getCash(5)}
        >-</Button>

        <Typography>{cashStore.cash}</Typography>
      </Stack>
      <Stack>
        <Button 
          loading={isLoading}
          color={error ? 'error' : 'success'}
          variant='contained'
          onClick={fetchData}
        >Fetch users</Button>
        {!!items.length && 
          <List>
            {items.map(item => <ListItem key={item.id}>{item.name}</ListItem>)}
          </List>
        }
      </Stack>
    </Box>
  )
}

export default observer(App)
