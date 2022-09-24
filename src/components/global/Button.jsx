import { Link } from 'react-router-dom'

const Button = (props) => {
    return(
        <Link to={`${props.url}`} className="flex justify-between items-center border-zinc-500 border bg-button hover:bg-button-hover rounded-md px-2 overflow-hidden shadow-md">
            <p>{props.name}</p>
            <img src={props.image} alt={`${props.name}`} className="w-[50px]" />
        </Link>
    )
}

export default Button