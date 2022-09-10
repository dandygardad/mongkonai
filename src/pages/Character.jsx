import { useParams } from 'react-router-dom'

const Character = () => {
    const { char } = useParams()
    return (
        <p>{ char }</p>
    )
}

export default Character