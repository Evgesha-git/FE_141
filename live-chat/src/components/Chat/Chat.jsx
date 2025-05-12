import { Box, Button, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, query, addDoc, orderBy, serverTimestamp, where } from 'firebase/firestore'
import { db } from "../../fb/initial"
import { useState } from "react"


const Chat = () => {
  const [text, setText] = useState('')
  /** @type {import("../../store/reducers/userSlice/userSlice").UserReducer} */
  const userState = useSelector(state => state.user)
  const { user } = userState

  const [messages, loading, error] = useCollectionData(
    // query(collection(db, 'chat'), [orderBy('createAt'), where('uid', '==', user.uid)])
    query(collection(db, 'chat'), orderBy('createAt'))
  )

  const sendMessage = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, 'chat'), {
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL || '',
      text,
      createAt: serverTimestamp()
    })

    setText('')
  }

  return (
    <Box
      sx={{
        height: '100%'
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }}>
        {!messages?.length && <Typography align="center">Сообщений нет</Typography>}
        {!!messages?.length &&
          messages.map(message =>
          (<Box key={message.createAt} sx={{
            width: '100%',
            display: 'flex',
            flexDirection: message.uid === user.uid ? 'row-reverse' : 'row',
          }}>
            <Box sx={{
              border: '1px solid',
              borderColor: message.uid === user.uid ? 'green' : 'gray',
              borderRadius: '6px',
              display: 'flex',
              gap: '5px',
              width: '50%'
            }}>
              <Box>
                <Typography variant="body1">{message.displayName}</Typography>
                <Box sx={{
                  width: '50px'
                }}>
                  <img
                    style={{ width: '100%' }}
                    src={message.photoUrl || 'https://placehold.co/50'}
                  />
                </Box>
              </Box>
              <Typography variant="body2">{message.text}</Typography>
            </Box>
          </Box>)
          )
        }
      </Box>
      <Box component={'form'} onSubmit={sendMessage} sx={{
        display: 'flex',
        gap: '5px'
      }}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth={true}
          variant="outlined"
        />
        <Button type="submit" variant="outlined" color="success">Отправить</Button>
      </Box>
    </Box>
  )
}

export default Chat