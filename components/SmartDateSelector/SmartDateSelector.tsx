'use client'

// Functional imports
import { DateTimePicker } from '@mantine/dates'
import { useRef, useState, useEffect } from 'react'
// Style imports
import '@mantine/dates/styles.css'

type Props = {
  passedDate?: Date
  label?: string
}

export default function DateComparer({ passedDate, label }: Props) {
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
      setDefault(new Date())
    }, 1000)
    if (passedDate) {
      handleChange(passedDate)
    }
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
