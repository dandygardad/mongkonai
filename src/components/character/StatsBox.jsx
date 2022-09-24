import PreviewStat from './PreviewStat'

const StatsBox = (props) => {
    return(
        <div className='container-box md:w-1/2'>
            <div className={`${props.daily ?"bg-daily" : "bg-focus"} bg-opacity-50 flex flex-col items-start`}>
                <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                    <p className='text-sm md:text-base text-zinc-100'>Stats Recommendation</p>
                </span>
                <div className='flex flex-col gap-2 px-2 py-4 w-full'>
                    <PreviewStat name={props.stats.flower} image={require('../../assets/stats/flower.png')} />
                    <PreviewStat name={props.stats.feather} image={require('../../assets/stats/feather.png')} />
                    <PreviewStat name={props.stats.sand} image={require('../../assets/stats/sand.png')} />
                    <PreviewStat name={props.stats.goblet} image={require('../../assets/stats/goblet.png')} />
                    <PreviewStat name={props.stats.circlet} image={require('../../assets/stats/circlet.png')} />
                </div>
            </div>
        </div>
    )
}

export default StatsBox