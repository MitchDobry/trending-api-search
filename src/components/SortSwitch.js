import React from 'react'
import { FormControl, FormLabel, Switch } from "@chakra-ui/react"

function SortSwitch() {
    return (
        <FormControl  p={[2, 1]} display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
                Sort
            </FormLabel>
            <Switch colorScheme="teal" size="lg"/>
      </FormControl>
    )
  }

  export default SortSwitch