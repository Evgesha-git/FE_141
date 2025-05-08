import { Box, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"

/**
 * @typedef {object} TimerProps
 * @property {string} time
 */

/**
 * 
 * @param {TimerProps} props 
 * @returns 
 */

const Timer = ({ time }) => {
  /** @type {[Date]} */
  const [timeObj, setTimeObj] = useState(null)
  const timerRef = useRef(null)

  const timer = () => {
    let times = new Date(time).getTime()
    let currentDate = new Date()
    if (times < currentDate.getTime()) {
      return
    }    
    const newDate = new Date(times - currentDate.getTime())
    setTimeObj(newDate)
    const timerId = setTimeout(timer, 1000)
    timerRef.current = timerId
  }

  useEffect(() => {
    const date = new Date(time)
    setTimeObj(date)
    timer()
    return () => clearTimeout(timerRef.current)
  }, [time])

  return (
    <Box sx={{ display: 'flex', gap: '2px', padding: '5px'}}>
      {timeObj && 
        <>
          <Typography>{timeObj.getUTCHours()}</Typography>
          :
          <Typography>{timeObj.getUTCMinutes()}</Typography>
          :
          <Typography>{timeObj.getUTCSeconds()}</Typography>
        </>
      }
    </Box>
  )
}

export default Timer