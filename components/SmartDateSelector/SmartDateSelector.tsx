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
      setDefault(new Date(dayjs().valueOf()))
    }, 1000)
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
