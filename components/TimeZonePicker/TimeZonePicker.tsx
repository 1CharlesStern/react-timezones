import { Autocomplete } from '@mantine/core'
import { useEffect, useState } from 'react'

type Props = {
  onChange: Function
}

export default function TimeZonePicker ({ onChange }: Props) {
  const tzData = Intl.supportedValuesOf('timeZone')

  return (
    <>
      <Autocomplete
        data={tzData}
        label="Select Timezone"
        onChange={onChange}
      />
    </>
  )
}