import React from 'react'
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

function RadioTime() {
    const [value, setValue] = React.useState("1")
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="1">daily</Radio>
          <Radio value="2">weekly</Radio>
          <Radio value="3">monthly</Radio>
        </Stack>
      </RadioGroup>
    )
  }

  export default RadioTime