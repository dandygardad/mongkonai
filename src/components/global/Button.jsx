import { Link } from 'react-router-dom'

const Button = (props) => {
    return(
        <Link to={`/ch/${props.url}`} className="flex justify-between items-center bg-button hover:bg-button-hover rounded-md px-2">
            <p>{props.name}</p>
            <img src={props.image} alt={`${props.name}`} className="w-[50px]" />
        </Link>
    )
}

export default Button