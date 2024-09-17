'use client'

import { useState } from 'react'
import { Container, Grid } from '@mantine/core'
import SmartDateSelector from '@/components/SmartDateSelector/SmartDateSelector'
import TimeZonePicker from '@/components/TimeZonePicker/TimeZonePicker'
import dayjs from 'dayjs'

export default function TimeZoneConverterApp () {
  const [fromTz, setFromTz] = useState<string>(dayjs.tz.guess())
  const [toTz, setToTz] = useState<string>(dayjs.tz.guess())
  const fromChange = (tz: string) => {
    // do conversion
    setFromTz(tz)
  }

  const toChange = (tz: string) => {
    // do conversion
    setToTz(tz)
  }

  return (
    <>
      <Container size="md">
        <Grid>
          <Grid.Col span={2}>
            <TimeZonePicker 
              onChange={fromChange}
            />
          </Grid.Col>
          <Grid.Col span={3} offset={1}>
            <SmartDateSelector
              label="Location Date/Time"
              timeZone={fromTz}
            />
          </Grid.Col>
          <Grid.Col span={3} offset={1}>
            <SmartDateSelector
              label="Destination Date/Time"
              timeZone={toTz}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <TimeZonePicker
              onChange={toChange}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}