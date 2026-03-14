
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle"

const MainContainer = (props) =>{
    console.log(props.title[0]);
    
    const {id , original_title , overview } = props.title[0]
    console.log(id);
    
    return(
        <div className="mainContainer-wrapper">
            <VideoContainer id={id}/>
            <VideoTitle id={id}  overview={overview } title={original_title}/>
        </div>
    )
}


export default MainContainer