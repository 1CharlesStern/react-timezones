'use client'

import { useState } from 'react'
import { Container, Grid, Title } from '@mantine/core'
import dynamic from 'next/dynamic'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { Space } from '@mantine/core'

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
        <Grid style={{ marginTop: '20%' }}>
          <Grid.Col span={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Title>Timezone Converter</Title>
          </Grid.Col>
          <Grid.Col span={2.75}>
            <TimeZonePicker 
              onChange={setFromTz}
            />
          </Grid.Col>
          <Grid.Col span={2.75}>
            <SmartDateSelector
              label="Location Date/Time"
              timeZone={fromTz}
            />
          </Grid.Col>
          <Grid.Col span={2.75} offset={1}>
            <SmartDateSelector
              label="Destination Date/Time"
              timeZone={toTz}
            />
          </Grid.Col>
          <Grid.Col span={2.75}>
            <TimeZonePicker
              onChange={setToTz}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}