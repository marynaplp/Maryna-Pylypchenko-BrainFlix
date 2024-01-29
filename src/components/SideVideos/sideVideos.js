import "./sideVideos.css";

const SideVideos=({videos, mainVideoId, onVideoSelect })=>{
    return (
    <section className="side-videos">
      <div class="side-videos__header">NEXT VIDEO</div>
      {videos.filter(video => video.id !== mainVideoId).map(filteredVideo => (
        <div key={filteredVideo.id} className="side-videos__item" onClick={() => onVideoSelect(filteredVideo.id)}>
          <img src={filteredVideo.image} alt={filteredVideo.title} className="side-videos__image" />
          <div className="side-videos__info">
            <h4 className="side-video__title">{filteredVideo.title}</h4>
            <p className="side-video__channel">{filteredVideo.channel}</p>
          </div>
        </div>
      ))}
    </section>
  );

}
  export default SideVideos
  