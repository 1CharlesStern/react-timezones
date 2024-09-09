import { NativeSelect } from '@mantine/core'
import { useEffect, useState } from 'react'

type Props = {
  onChange: Function
}

export default function TimeZonePicker ({ onChange }: Props) {
  const tzData = Intl.supportedValuesOf('timeZone')
  const [tzValue, setTz] = useState<string>('')
  

  useEffect(() => {
    setTz(tzData[0])
  }, [])

  const handleChange = (tz: Event) => {
    console.log(tz)
    setTz(tz.currentTarget.value)
    onChange(tz)
  }

  return (
    <>
      <NativeSelect
        value={tzValue}
        data={tzData}
        label="Select Timezone"
        onChange={handleChange}
      />
    </>
  )
}