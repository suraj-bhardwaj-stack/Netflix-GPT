
import MovieList from "./MovieList";
import SecondaryContainer from "./SecondaryContainer";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle"

const MainContainer = (props) =>{
    console.log(props.title[1]);
    
    const {id , original_title , overview } = props.title[0]
    console.log(id);
    
    return(
        <div className="mainContainer-wrapper">
            <VideoTitle id={id}  overview={overview } title={original_title}/>
            <VideoContainer id={id}/>
            <SecondaryContainer/>
        </div>
    )
}


export default MainContainer