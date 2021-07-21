import React from "react";
import { useSelector } from "react-redux";


function Repositories ()  {
    const repos = useSelector((state) => state.repositories.entities)
    console.log(repos)
    return (

            repos.map((item) => (
                <div>{item.name}</div>
            ))
    )
}

export default Repositories