import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import useFetch from "react-fetch-hook";

export default function RepoFetcher() {
  const { isLoading, error, data } = useFetch("http://0.0.0.0:8000/");
  const repositories = useSelector((state) => state.repositories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_REPOSITORIES', payload:data })
  }, [repositories, data])


  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}