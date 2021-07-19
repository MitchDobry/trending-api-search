import React from 'react'
import { Select } from "@chakra-ui/react"

function LanguageSelection() {
    const [language, setLanguage] = React.useState("1")
    return (
        <Select placeholder="Select option" onChange={setLanguage} value={language}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    )
  }

  export default LanguageSelection