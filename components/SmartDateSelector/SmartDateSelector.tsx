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
  timezone?: string
}

export default function DateComparer({ label, timezone }: Props) {
  const [defaultDate, setDefault] = useState<Date>()
  const [userDate, setUserDate] = useState<Date>()
  const interval = useRef<NodeJS.Timeout>()

  const handleChange = (d: Date): void => {
    clearInterval(interval.current)
    interval.current = undefined
    setUserDate(d)
  }

  useEffect(() => {
    interval.current = setInterval(() => {
      console.log('incoming tz: ')
      console.log(timezone)
      let date = new Date(dayjs().tz(dayjs.tz.guess()).valueOf())
      try {
        date = new Date(dayjs().tz(timezone).valueOf())
      } catch (e) {
        console.log(e)
      }
      setDefault(date)
    })
  }, [])

  return (
    <>
      <DateTimePicker
        onChange={handleChange}
        value={userDate ?? defaultDate}
        label={label}
        valueFormat="DD MMM YYYY hh:mm:ss A"
      />
    </>
  )
}
