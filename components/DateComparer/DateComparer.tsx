'use client'

import { DateTimePicker } from '@mantine/dates'
import { Grid } from '@mantine/core'
import { useRef, useState, useEffect } from 'react'

export function DateComparer() {
  const [defaultDate, setDefault] = useState<Date>()
  const [userDate, setUserDate] = useState<Date>()
  const interval = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setDefault(new Date())
    }, 1000)
  }, [])

  const handleChange = (d: Date): void => {
    clearInterval(interval.current)
    interval.current = null
    setUserDate(d)
  }

  return (
    <>
      <Grid>
        <Grid.Col span={4} offset={1}>
          <DateTimePicker
            onChange={handleChange}
            value={userDate ?? defaultDate}
            label="Date & Time at your current location"
            valueFormat="DD MMM YYYY hh:mm:ss A"
          />
        </Grid.Col>
        <Grid.Col span={4} offset={1}>
          <DateTimePicker label="Date & Time at your destination" />
        </Grid.Col>
      </Grid>
    </>
  )
}
