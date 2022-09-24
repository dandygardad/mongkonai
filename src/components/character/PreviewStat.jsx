const PreviewStat = (props) => {
    return(
        <div className="flex justify-between items-center border-zinc-500 border bg-button hover:bg-button-hover rounded-md px-2 shadow-md">
            <p>{props.name}</p>
            <img src={props.image} alt={props.name} className="w-[50px]" />
        </div>
    )
}

export default PreviewStat