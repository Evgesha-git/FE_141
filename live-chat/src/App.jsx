import { createBrowserRouter, RouterProvider } from 'react-router'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'

const baseRouter = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Typography variant='h1'>Вы не авторизованы</Typography>,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Typography variant='h1'>404</Typography>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/chat',
        element: <Chat />
      }
    ]
  }
])

function App() {
  const { user } = useSelector(state => state.user)

  return (
    <Box sx={{
      padding: '0 16px',
      minHeight: '100vh'
    }}>
      <RouterProvider router={user ? userRouter : baseRouter} />
    </Box>
  )
}

export default App
