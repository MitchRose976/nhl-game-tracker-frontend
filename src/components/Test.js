import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Test() {

    let url = `https://statsapi.web.nhl.com/api/v1/schedule`
    const [liveGames, setLiveGames] = useState(null);
    useEffect(async () => {
        await axios.get(url).then((response) => {
            setLiveGames(response);
            console.log("liveGames: ", liveGames);
        });
      }, [url]);



  return <div>Hey</div>;
}

export default Test;
