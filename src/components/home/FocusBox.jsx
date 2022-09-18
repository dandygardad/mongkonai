import Button from '../global/Button'

const DailyMaterials = (props) => {
    return(
        <div className='container-box md:w-1/2'>
            <div className={`${props.daily ?"bg-daily" : "bg-focus"} bg-opacity-50 flex flex-col items-start`}>
                <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                    <p className='text-sm text-zinc-100'>{props.name}</p>
                </span>
                <div className='flex flex-col gap-2 px-2 py-4 h-[200px] overflow-y-auto w-full'>
                    {props.content.map((items, index) => <Button key={index} name={items.name} image={items.gender ? "chars/".concat(items.image) : "items/".concat(items.image)} url={items.url} />)}
                </div>
            </div>
        </div>
    )
}

export default DailyMaterials