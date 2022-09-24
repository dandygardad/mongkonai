import Button from '../global/Button'

import { useState } from 'react'
import { ReactComponent as ArrowSVG } from '../../assets/icons/arrow.svg'

const ArtifactButton = (props) => {
    const [openSC, setOpenSC] = useState(false)
    const data = (<div className='py-2 grid gap-2'>
        <Button name={"Viridescent Venerer"} image={require('../../assets/items/skyward_spine.png')}></Button>
        <Button name={"Gladiator"} image={require('../../assets/items/skyward_spine.png')}></Button>
    </div>)

    // Control to button
    const openButton = () => {
        setOpenSC((prevState) => !prevState)
    }

    return(
        <div className="bg-showcase rounded-md px-2 py-1">
            {/* Button to click */}
            <button onClick={openButton} className='flex justify-between items-center p-2 w-full'>
                <p className='text-left font-bold tracking-tighter md:text-lg text-button-text'>{props.name}</p>
                <ArrowSVG className={openSC ? 'rotate-180' : null} />
            </button>
            {/* Content */}
            {openSC && data}
            
        </div>
    )
}

export default ArtifactButton