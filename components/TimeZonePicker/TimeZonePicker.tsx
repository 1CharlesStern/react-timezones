import { Autocomplete } from '@mantine/core'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

type Props = {
  onChange: Function
}

export default function TimeZonePicker ({ onChange }: Props) {
  const [value, setValue] = useState(dayjs.tz.guess())
  const tzData = Intl.supportedValuesOf('timeZone')

  const handleChange = (tz: string) => {
    setValue(tz)
    onChange(tz)
  }

  return (
    <>
      <Autocomplete
        data={tzData}
        value={value}
        label="Select Timezone"
        onChange={handleChange}
      />
    </>
  )
}