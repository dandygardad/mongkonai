import {ReactComponent as InfoSVG} from '../../assets/icons/info-white.svg'
import {ReactComponent as SearchButton} from '../../assets/icons/search-white.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-3 mx-auto'>
            <Link to="/" className='font-inknut text-zinc-100 text-xl tracking-tighter'>Mongkonai</Link>
            <ul className='flex gap-4'>
                <li><SearchButton /></li>
                <li><InfoSVG /></li>
            </ul>
        </div>
    )
}

export default Navbar