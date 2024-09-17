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

  let date = new Date(new Date().toLocaleString('en-US'))
  let tzDate = new Date(date.getTime())
  try {
    tzDate = new Date(date.toLocaleString('en-US', { timeZone }))
  } catch (e) {}
  const defaultDate = tzDate

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
