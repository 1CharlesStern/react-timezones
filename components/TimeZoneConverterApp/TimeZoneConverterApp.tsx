'use client'

import { Container, Grid } from '@mantine/core'
import SmartDateSelector from '@/components/SmartDateSelector/SmartDateSelector'
import TimeZonePicker from '@/components/TimeZonePicker/TimeZonePicker'

export default function TimeZoneConverterApp () {
  let fromTz, toTz
  const fromChange = (tz: string) => {
    // do conversion
    console.log(tz)
    fromTz = tz
  }

  const toChange = (tz: string) => {
    // do conversion
    console.log(tz)
    toTz = tz
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
              timezone={fromTz}
            />
          </Grid.Col>
          <Grid.Col span={3} offset={1}>
            <SmartDateSelector
              label="Destination Date/Time"
              timezone={toTz}
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