import React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { setSince } from "../redux/userSettings";

const SINCE_TYPE = [
  { value: "daily", name: "Daily" },
  { value: "weekly", name: "Weekly" },
  { value: "monthly", name: "Monthly" },
];

function RadioTime() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSince(event.target.value));
  };

  return (
    <RadioGroup p={[2, 3]}>
      <Stack direction="row">
        {SINCE_TYPE.map((item) => (
          <Radio onChange={handleChange} key={item.name} value={item.value}>
            {item.name}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
}

export default RadioTime;
