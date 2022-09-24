import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArtifactInfo from '../components/artifact/ArtifactInfo'

const Artifact = () => {
    const { artifact } = useParams()
    const [artifactInfo, setArtifactInfo] = useState({})
    const [isLoading, setIsLoading] = useState("LOAD")

    useEffect(() => {
        fetch('http://localhost:8000/stuff/artifacts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: artifact})
        }).then((response) => response.json()).then((data) => {
            if(data.artifact) {
                // Update the title of the web
                document.title = `${data.artifact.name} - Mongkonai`
                setArtifactInfo(data)
                setIsLoading("LOADED")
            }
            else {
                setIsLoading("NOTFOUND")
            }
        }).catch((err) => console.error(err))
    }, [artifact])

    let content
    if(isLoading === "LOADING"){
        content = <p className='text-zinc-100 text-center animate-pulse'>Loading</p>
    } else if(isLoading === "LOADED"){
        content = <ArtifactInfo art={artifactInfo.artifact} />
    } else {
        content = <p className='text-zinc-100 text-center'>Artifact Not Found!</p>
    }


    return(
        <>
        {content}
        </>
    )
}

export default Artifact