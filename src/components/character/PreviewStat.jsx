const PreviewStat = (props) => {
    return(
        <div className="flex justify-between items-center border-zinc-500 border bg-button hover:bg-button-hover rounded-md px-2 shadow-md">
            <p className="text-zinc-800">{props.name}</p>
            <img src={props.image} alt={props.name} className="ml-3 w-[50px]" />
        </div>
    )
}

export default PreviewStat