import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import MaterialInfo from '../components/material/MaterialInfo'

const Material = () => {
    const { material } = useParams()
    const [materialInfo, setMaterialInfo] = useState({})
    const [isLoading, setIsLoading] = useState("LOADING")

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/stuff/materials`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: material })
        }).then(response => response.json()).then(data => {
            if(data.materials){
                document.title = data.materials.name + ' - Mongkonai'
                setMaterialInfo(data.materials)
                setIsLoading("LOADED")
            } else {
                setIsLoading("NOTFOUND")
            }
        }).catch(err => setIsLoading('FAILED'))
    }, [material])

    let content
    if(isLoading === "LOADING"){
        content = <p className='text-zinc-100 text-center animate-pulse'>Loading...</p>
    } else if(isLoading === 'FAILED'){
        content = <p className='text-zinc-100 text-center animate-pulse'>We're experiencing traffic overload, please try again.</p>
    } else if(isLoading === "LOADED"){
        content = <MaterialInfo mat={materialInfo} />
    } else if(isLoading === "NOTFOUND") {
        content = <p className='text-zinc-100 text-center'>Material Not Found!</p>
    }

    return(
        <>
        
        {content}
        
        </>
    )
}

export default Material