const Home=()=>{
 const [videos, setVideos] = useState([]);
const [mainVideo, setMainVideo]=useState(null);

useEffect =() =>{

}
return (
    <div>
        {mainVideo && <MainVideo video={mainVideo} /> }
        <VideoLayout 
        mainVideo={mainVideo}
        sideVideos={video}
        comments={mainVideo?.comments}
        />
    </div>
)
}
export default Home;