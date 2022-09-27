import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MaterialsInfo from '../components/material/MaterialsInfo'

const Materials = () => {
    const { materials } = useParams()
    const [materialsInfo, setMaterialsInfo] = useState({})
    const [isLoading, setIsLoading] = useState("LOADING")

    useEffect(() => {
        fetch('http://localhost:8000/stuff/materials/full', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: materials})
        }).then((response) => response.json()).then((data) => {
            if(data.materials) {
                // Update the title of the web
                document.title = `${data.materials.name} - Mongkonai`
                setMaterialsInfo(data)
                setIsLoading("LOADED")
            }
            else {
                setIsLoading("NOTFOUND")
            }
        }).catch((err) => console.error(err))
    }, [materials])

    let content
    if(isLoading === "LOADING"){
        content = <p className='text-zinc-100 text-center animate-pulse'>Loading</p>
    } else if(isLoading === "LOADED"){
        content = <MaterialsInfo mats={materialsInfo} />
    } else if(isLoading === "NOTFOUND"){
        content = <p className='text-zinc-100 text-center'>Materials Not Found!</p>
    }

    return(
        <>
        {content}
        </>
    )
}

export default Materials