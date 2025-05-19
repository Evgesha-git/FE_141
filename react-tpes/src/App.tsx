import Button from "./components/Button"
import ListItem from "./components/LIstItem"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import fetchUsesData from "./store/extraAction/userExtra"

function App() {
  const { error, loading, users } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <Button
        error={!!error}
        label="Загрузить пользователей"
        loding={loading}
        onClick={() => dispatch(fetchUsesData())}
        style={{
          padding: '8px',
          cursor: 'pointer',
          width: '100%'
        }}
      />
      <div>
        {users.map(user =>
          <ListItem 
            style={{
              padding: '8px 5px',
              borderBlock: '1px solid #cdcdcd',
              background: '#fefefe'
            }}
            key={user.id}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </ListItem>)}
      </div>
    </div>
  )
}

export default App
