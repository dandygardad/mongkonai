import {ReactComponent as InfoSVG} from '../../assets/icons/info-white.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-3 mx-auto bg-green'>
            <Link to="/" className='font-inknut text-zinc-100 text-xl md:text-2xl tracking-tighter'>Mongkonai</Link>
            <ul className='flex gap-4'>
                {/* <li><SearchButton /></li> */}
                <li><Link to={'about'}><InfoSVG /></Link></li>
            </ul>
        </div>
    )
}

export default Navbar