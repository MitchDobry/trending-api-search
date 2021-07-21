import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormControl, FormLabel, Switch } from "@chakra-ui/react"
import { toggleSort } from '../redux/userSettings'

function SortSwitch() {
    const dispatch = useDispatch()
    const repos = useSelector((state) => state.repositories.entities)
    const sortedStars = repos.map((item) => (
        item.stars
    )).sort()
    console.log(sortedStars)

    const handleChange = (event) => {
        dispatch(toggleSort(event.target.value));
    }

    return (
        <FormControl  p={[2, 1]} display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
                Sort
            </FormLabel>
            <Switch colorScheme="teal" size="lg" value={sortedStars} onChange={handleChange} />
      </FormControl>
    )
  }

  export default SortSwitch