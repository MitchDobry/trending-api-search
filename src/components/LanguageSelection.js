import React, { useEffect, useMemo } from "react";
import { Select, Stack, FormLabel } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllLanguages } from "../redux/languages";

import { setLanguage } from "../redux/userSettings";

function LanguageSelection() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.entities);
  const currentLanguage = useSelector((state) => state.userSettings.language);
  const handleChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  const options = useMemo(
    () =>
      languages.map(({ urlParam, name }) => (
        <option key={urlParam} value={urlParam}>
          {name}
        </option>
      )),
    [languages]
  );
  // TODO sprawdić skąd się bierze undefined
  useEffect(() => {
    dispatch(fetchAllLanguages());
  }, [dispatch]);

  return (
    <Stack direction="column" m={[0]}>
      <FormLabel p={[2, 1]} color="gray" m={[0, 0]}>
        Search by language
      </FormLabel>
      <Select
        p={[2, 1]}
        m={[0, 0]}
        style={{ marginTop: "0" }}
        onChange={handleChange}
        placeholder={currentLanguage ? currentLanguage : "Select language"}
      >
        {options}
      </Select>
    </Stack>
  );
}

export default LanguageSelection;
