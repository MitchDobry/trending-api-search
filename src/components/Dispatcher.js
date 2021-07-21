import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRepositories } from "../redux/repositories";

const Dispacher = () => {
    const dispatch = useDispatch()
    const language = useSelector((state) => state.userSettings.language)
    const since = useSelector((state) => state.userSettings.since)

    useEffect(() => {
        dispatch(fetchAllRepositories(
            {language, since}
        ))
    }, [dispatch,language, since])

    return null
}

export default Dispacher