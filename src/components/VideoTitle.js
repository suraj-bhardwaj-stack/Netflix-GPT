const VideoTitle = ({id , overview , title}) => {
    
    return(
        <div className="title-wrapper h-[100%] w-[100%]  absolute top-0 z-0">
           <div className="inner-wrapper absolute top-[45%] left-[51%] translate-x-[-100%] translate-y-[-50%]">
                <h1 className="text-4xl font-bold text-white">{title}</h1>
                <p className="w-[50%] mt-4 text-white">{overview}</p>

                <div className="">
                    <button className="bg-white text-black py-2 px-8 text-lg font-semibold rounded mt-4 ">Play</button>
                    <button className="bg-white/20 text-white py-2 px-8 text-lg font-semibold rounded mt-4  ml-4">More Info</button>
                </div>
           </div>
        </div>
    )
}

export default VideoTitle;