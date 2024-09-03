'use client'
import { DateTimePicker } from '@mantine/dates'
import { ChangeEvent, useState } from 'react'

export function DateComparer() {
  const [defaultDate, setDefault] = useState<Date>()
  let userDate = null

  const i = setInterval(() => {
    setDefault(new Date())
  })

  return (
    <>
      <DateTimePicker
        onChange={(d: Date) => { clearInterval(i); userDate = d }}
        value={userDate || defaultDate}
        label="Date & Time at your current location"
        valueFormat="DD MMM YYYY hh:mm:ss A" 
      />
      <DateTimePicker label="Date & Time at your destination" />
    </>
  )
}