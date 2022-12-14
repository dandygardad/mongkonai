import Button from '../global/Button'

import { useState } from 'react'
import { ReactComponent as ArrowSVG } from '../../assets/icons/arrow.svg'

const ArtifactButton = (props) => {
    const [openSC, setOpenSC] = useState(false)
    const data = (<div className='py-2 grid gap-2'>
        {props.data.map((item, index) => {
            return <Button key={index} name={item.name} image={item.image} url={'/art/' + item.name.replace(/\s/g, '').toLowerCase()} />
        })}
    </div>)

    // Control to button
    const openButton = () => {
        setOpenSC((prevState) => !prevState)
    }

    return(
        <div data-testid={"artifact-button"} className="bg-showcase rounded-md px-2 py-1">
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