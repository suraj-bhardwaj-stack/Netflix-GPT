const VideoTitle = ({id , overview , title}) => {
    
    return(
        <div className="title-wrapper h-[100%] w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="w-[50%] mt-4 text-white">{overview}</p>

            <div className="">
                <button className="bg-black text-white py-2 px-8 text-lg font-semibold rounded mt-4 ">Play</button>
                <button className="bg-black text-white py-2 px-8 text-lg font-semibold rounded mt-4 opacity-20 ml-4">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;