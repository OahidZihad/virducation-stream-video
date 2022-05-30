import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

function App() {
  const [data, setData] = useState([
    {
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      title: "Stream link one",
    },
    {
      url: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
      title: "Stream link two",
    },
  ]);

  const [video, setVideo] = useState();

  useEffect(() => {
    fetch("http://3.237.196.207/api/videos", {
      mode: "no-cors",
      redirect: "follow",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
      },
    })
      .then((response) => response.text())
      .then((result) => console.log("result", result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="container overflow-hidden">
      <div
        className="row gx-3 text-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div class="col-md-12 col-lg-8">
          {video ? (
            <ReactPlayer
              className="react-player"
              width="100%"
              url={video}
              controls
              playing={true}
            />
          ) : (
            <div className="react-empty-player d-flex justify-content-center align-items-center">
              <h5>Video Player. . . .</h5>
            </div>
          )}
        </div>
        <div class="col-md-12 col-lg-4">
          <h3>List of Videos</h3>
          {data.map((item) => {
            return (
              <h5 onClick={() => setVideo(item.url)} className="title">
                <MdOutlineSlowMotionVideo /> &nbsp; {item.title}
              </h5>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
