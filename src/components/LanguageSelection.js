import React, { useEffect, useMemo } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllLanguages } from "../redux/languages";

import { setLanguage } from '../redux/userSettings'

function LanguageSelection() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.entities);

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
  },[dispatch]);

  return <Select p={[2, 1]} onChange={handleChange} placeholder="Select language">{options}</Select>;
}

export default LanguageSelection;
