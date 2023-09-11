import React from "react";
import "./App.scss";
import RouterComponent from "./components/RouterComponent/RouterComponent";

// export const Context = createContext();

function App() {
  // const [videos, setVideos] = useState([]);
  // const [currentLocation, setCurrentLocation] = useState();

  // useEffect(() => {
  // const fetchVideos = async () => {
  //   fetch(`/api/videos/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data !== undefined && data !== null) {
  //         setVideos(data.items);
  //       } else {
  //         console.log("NO YouTube videos");
  //         setVideos(undefined);
  //       }
  //     });
  // };
  // fetchVideos();
  // }, []);

  return (
    <>
      <RouterComponent />
    </>
  );
}

export default App;
