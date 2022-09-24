import ArtifactButton from './ArtifactButton'

const ArtifactRec = (props) => {
    return(
        <div className='container-box my-7'>
            <div className={`${props.daily ?"bg-daily" : "bg-focus"} bg-opacity-50 flex flex-col items-start`}>
                <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                    <p className='text-sm md:text-base text-zinc-100'>Artifacts Recommendation</p>
                </span>
                <div className='flex flex-col gap-2 px-2 py-4 w-full'>
                        <ArtifactButton name="Viridescent & Gladiator" />
                        <ArtifactButton name="Viridescent & Gladiator" />
                        <ArtifactButton name="Viridescent & Gladiator" />
                </div>
            </div>
        </div>
    )
}

export default ArtifactRec