import Button from "../global/Button"

const ArtifactInfo = (props) => {
    return (
        <div className='container-box'>
            <div className={`bg-geo bg-opacity-70 flex justify-between relative`}>
                <div className='flex flex-col items-start justify-between pb-2 text-zinc-100 tracking-tigher w-full'>
                    <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                        <p className='text-sm md:text-base'>Materials Info</p>
                    </span>
                    {/* <img src={props.mat.images.nameicon} alt={props.mat.name} className="w-[120px] mx-auto py-3" /> */}
                    <div className='flex flex-col w-full'>
                        <p className='px-3 pt-3 text-2xl font-semibold'>{props.mats.materials.name}</p>
                        <div className='bg-zinc-800 m-2 py-3 px-2 rounded-md bg-opacity-80 grid gap-1'>
                            <p className="py-1">Components: </p>
                            {props.mats.material_data.map((item, index) => <Button key={index} name={item.name} image={item.image} url={'/mat/' + item.url} />)}     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtifactInfo