import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import useFetch from "react-fetch-hook";

// https://ghapi.huchen.dev/repositories?language=javascript&since=weekly
// http://0.0.0.0:8000?language=javascript&since=weekly

export default function RepoFetcher() {
  const { isLoading, error, data } = useFetch("http://0.0.0.0:8000/");
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_REPOSITORIES', payload:data })
    if(!isLoading || !error){
    dispatch({ type: 'DATA_LOADED', payload:true})}
  }, [data, dispatch, isLoading, error])

  console.log(isLoading,error)
  if (isLoading) return "Loading...";
  if (error) return "Ups... error!";

  return null
}

const fetchRepos = async (arg) => {

  const params = Object.keys(arg).map(key => `${key}=${arg[key]}`).join("&")

  const response = await fetch("http://0.0.0.0:8000?" + params)
  return response?.data || []
}

const JestemTestem = () => {
  const languages = useSelector(state => state.languages)
  const since = useSelector(state => state.since)
  const dispatch = useDispatch()

  useEffect(async () => {
    const repos = await fetchRepos()
    dispatch({ type: 'SET_REPOSITORIES', payload: repos })
  },[languages])

  return null

}