import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 

const Material = () => {
    const { material } = useParams()
    const [materialInfo, setMaterialInfo] = useState({})

    useEffect(() => {
        fetch('http://127.0.0.1:8000/stuff/materials', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: material })
        }).then(response => response.json()).then(data => {
            setMaterialInfo(data.materials)
        }).catch(err => console.log(err))
    }, [material])

    return(
        <p>{JSON.stringify(materialInfo)}</p>
    )
}

export default Material