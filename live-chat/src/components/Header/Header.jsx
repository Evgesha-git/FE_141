import { Link, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Box, List, ListItemButton } from "@mui/material";
import { get, getDatabase, ref } from 'firebase/database'
import { useEffect } from "react";
import { userSlice } from "../../store/reducers/userSlice/userSlice";
import { app } from "../../fb/initial";
import { signInWithCustomToken } from 'firebase/auth'

const Header = () => {
  /** @type {import("../../store/reducers/userSlice/userSlice").UserReducer} */
  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()

  const { user } = userState

  useEffect(() => {
    const getUser = async () => {
      const uid = localStorage.getItem('uid')

      if (uid) {
        const db = getDatabase(app)
        const snapshot = await get(ref(db, 'users/' + uid))
        if (snapshot.exists) {
          dispatch(userSlice.actions.setUser(snapshot.val()))
        } else {
          console.log('Что то пошло не так');

        }
      }
    }

    getUser()
  }, [])


  return (
    <>
      <Box component={'header'} sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        alignItems: 'center'
      }}>
        <Box>
          <List sx={{
            display: 'flex',
            gap: '5px'
          }}>
            <ListItemButton>
              <Link to={'/'}>Домашняя страница</Link>
            </ListItemButton>
            {user &&
              <ListItemButton>
                <Link to={'/chat'}>Чат</Link>
              </ListItemButton>
            }
          </List>
        </Box>
        <Box>
          {user ? user.displayName : 'Гость'}
        </Box>
      </Box>
      <Outlet />
    </>
  )
}

export default Header