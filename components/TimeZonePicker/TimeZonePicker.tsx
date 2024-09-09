import { Autocomplete } from '@mantine/core'
import { useEffect, useState } from 'react'
import ct from 'countries-and-timezones'

type Props = {
  onChange: Function
}

export default function TimeZonePicker ({ onChange }: Props) {
  const tzData = Object.keys(ct.getAllTimezones())
  const [tzValue, setTz] = useState<string>('')

  useEffect(() => {
    setTz(tzData[0])
  }, [])

  const handleChange = (tz: Event) => {
    setTz(tz.currentTarget.value)
    onChange(tz)
  }

  return (
    <>
      <Autocomplete
        data={tzData}
        label="Select Timezone"
        onChange={handleChange}
      />
    </>
  )
}