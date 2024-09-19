'use client'

import { useState } from 'react'
import { Container, Grid } from '@mantine/core'
import dynamic from 'next/dynamic'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

const SmartDateSelector = dynamic(() => import('@/components/SmartDateSelector/SmartDateSelector'), { ssr: false })
const TimeZonePicker = dynamic(() => import('@/components/TimeZonePicker/TimeZonePicker'), { ssr: false })


export default function TimeZoneConverterApp () {
  const [fromTz, setFromTz] = useState<string>(dayjs.tz.guess())
  const [toTz, setToTz] = useState<string>(dayjs.tz.guess())

  return (
    <>
      <Container size="md">
        <Grid>
          <Grid.Col span={2}>
            <TimeZonePicker 
              onChange={setFromTz}
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
              onChange={setToTz}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}