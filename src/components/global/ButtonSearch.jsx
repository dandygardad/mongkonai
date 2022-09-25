import { Link } from 'react-router-dom'

const ButtonSearch = (props) => {
    const handleChar = (e) => {
        props.updateInput("")
    }

    return(
        <Link to={`${props.url}`} onClick={handleChar} className="flex justify-between items-center border-zinc-500 border bg-button hover:bg-button-hover rounded-md px-2 shadow-md">
            <p className='text-zinc-800'>{props.name}</p>
            <img src={props.image} alt={`${props.name}`} className="w-[50px]" />
        </Link>
    )
}

export default ButtonSearch