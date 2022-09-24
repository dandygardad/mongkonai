const MaterialInfo = (props) => {
    return (
        <div className='container-box'>
            <div className={`bg-geo bg-opacity-70 flex justify-between relative`}>
                <div className='flex flex-col items-start justify-between pb-2 text-zinc-100 tracking-tigher'>
                    <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                        <p className='text-sm md:text-base'>Material Info</p>
                    </span>
                    <img src={props.mat.images.nameicon} alt={props.mat.name} className="w-[120px] mx-auto" />
                    <div className='flex flex-col w-full'>
                        <p className='px-3 text-2xl font-semibold'>{props.mat.name}</p>
                        <div className='bg-zinc-800 m-2 py-3 px-2 rounded-md bg-opacity-80'>
                            <p className='px-2 container-box__text'>{props.mat.description}</p>
                            <table className="mt-3">
                                <tbody>
                                    {props.mat.daysofweek ? <tr>
                                        <td className='px-2 container-box__text align-top'>Available: </td>
                                        <td className='px-3 font-bold container-box__text align-top'>{props.mat.daysofweek.map((data, index) => <span>{data}{index < props.mat.daysofweek.length - 1 ? ", " : "."} </span>)}</td>
                                    </tr> : null}
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Material Type: </td>
                                        <td className='px-3 container-box__text align-top'>{props.mat.materialtype}</td>
                                    </tr>
                                    {props.mat.dropdomain ? 
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Domain: </td>
                                        <td className='px-3 container-box__text align-top'>{props.mat.dropdomain}</td>
                                    </tr> : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialInfo