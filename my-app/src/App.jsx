import './App.css'
import Layout from './components/layout'
import { SnackbarProvider } from 'notistack'

function App() {


  return (
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'top'
      }}
      autoHideDuration={3000}
      disableWindowBlurListener
    >
      <Layout />
    </SnackbarProvider>
  )
}

export default App
