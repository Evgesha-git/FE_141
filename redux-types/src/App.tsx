import { createPortal } from 'react-dom'
import { Alert, Box, Button, ButtonGroup, List, ListItem, ListItemButton, ListItemText, Snackbar } from '@mui/material'
import { useTypeSelector } from './hooks/useTypeSelector'
import { useAction } from './hooks/useAction'
import { useEffect, useState } from 'react'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const { error, loading, users } = useTypeSelector(state => state.users)
  const { getUsers } = useAction()

  const onClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (error) {
      setOpen(true)
    } else {
      onClose()
    }
  }, [error])

  return (
    <Box>
      <ButtonGroup>
        <Button
          loading={loading}
          onClick={getUsers}
          variant='outlined'
          color={error ? 'error' : 'success'}
        >Загрузить</Button>
      </ButtonGroup>
      <List>
        {users.map(user =>
          <ListItem key={user.id}>
            <ListItemText>{user.name}</ListItemText>
            <ListItemButton>{user.email}</ListItemButton>
          </ListItem>
        )}
      </List>
      {createPortal(
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={onClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <Alert
            severity='error'
            variant='filled'
            sx={{ width: '100%' }}
          >
            {error}
          </Alert>
        </Snackbar>,
        document.body
      )}
    </Box>
  )
}

export default App
