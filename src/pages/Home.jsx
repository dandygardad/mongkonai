import NewContent from "../components/home/NewContent"
import FocusBox from "../components/home/FocusBox"

const Home = () => {
    const daily = [
        {
            name: "Aerosiderite",
            image: "aerosiderite.png",
            url: "aerosiderite"
        },
        {
            name: "Dandelion Gladiator",
            image: "dandelion.png",
            url: "dandelion"
        },
        {
            name: "Mask",
            image: "stained.png",
            url: "mask"
        },
    ]

    const focus = [
        {
            name: "Diluc",
            gender: "Male",
            image: "diluc.png",
            url: "diluc"
        },
        {
            name: "Xiao",
            gender: "Male",
            image: "xiao.png",
            url: "diluc"
        },
        {
            name: "Skyward Spine",
            image: "skyward_spine.png",
            url: "skywardspine"
        }
    ]
    
    return(
        <>
        <NewContent />
        <div className="py-7 flex flex-col gap-3 md:flex-row">
            <FocusBox name="Daily Materials" daily={true} content={daily} />
            <FocusBox name="Your Focus" daily={false} content={focus} />
        </div>
        </>
    )
}

export default Home