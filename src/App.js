import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://3.237.196.207/api/videos", {
    //   method: "GET",
    //   mode: "no-cors",
    //   redirect: "follow",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "text/plain",
    //   },
    // })
    //   .then((response) => response.text())
    //   .then((result) => console.log("result", result))
    //   .catch((error) => console.log("error", error));

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
      },
    };

    fetch("http://3.237.196.207/api/videos", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("result", result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="container">
      <div className="row gx-3 text-center">
        <div class="col-md-8">
          <div>Custom column padding</div>
        </div>
        <div class="col-md-4">
          <div>Custom column padding</div>
        </div>
      </div>
    </div>
  );
}

export default App;
