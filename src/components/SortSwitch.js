import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { toggleSort } from "../redux/userSettings";

function SortSwitch() {
  const dispatch = useDispatch();
  const sortByStars = useSelector((state) => state.userSettings.sortByStars);

  const handleChange = () => dispatch(toggleSort());

  return (
    <FormControl p={[2, 1]} display="flex" alignItems="center" m={[1, 1]}>
      <Stack direction="column">
        <FormLabel color="gray" htmlFor="email-alerts" m={[0, 0]}>
          Sort by stars
        </FormLabel>
        <RadioGroup  p={[2, 3]} onChange={handleChange} value={sortByStars}>
          <Stack direction="row">
            <Radio value="asc">Ascending</Radio>
            <Radio value="desc">Descending</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </FormControl>
  );
}

export default SortSwitch;
