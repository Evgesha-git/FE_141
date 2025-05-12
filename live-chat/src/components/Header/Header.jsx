import { Link, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { Box, List, ListItemButton } from "@mui/material";

const Header = () => {
  /** @type {import("../../store/reducers/userSlice/userSlice").UserReducer} */
  const userState = useSelector(state => state.user)

  const { user } = userState

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