'use client'

// Functional imports
import { DateTimePicker } from '@mantine/dates'
import { useRef, useState, useEffect } from 'react'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
// Style imports
import '@mantine/dates/styles.css'

dayjs.extend(utc)
dayjs.extend(timezone)

type Props = {
  label?: string
  timeZone?: string
}

export default function DateComparer({ label, timeZone }: Props) {
  const [userDate, setUserDate] = useState<Date>()
  const [defaultDate, setDefaultDate] = useState<Date>()

  useEffect(() => {
    const timer = setInterval(() => {
      let updatedDate = new Date(new Date().toLocaleString('en-US'))
      try {
        updatedDate = new Date(new Date().toLocaleString('en-US', { timeZone }))
      } catch (e) {}
      setDefaultDate(updatedDate)
    }, 1000)
  
    return () => clearInterval(timer)
  }, [timeZone])

  return (
    <>
      <DateTimePicker
        onChange={setUserDate}
        value={userDate ?? defaultDate}
        label={label}
        valueFormat="DD MMM YYYY hh:mm:ss A"
      />
    </>
  )
}
