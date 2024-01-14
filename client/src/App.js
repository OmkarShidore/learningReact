import React from "react";
import getLayoutConfig from "./api";
import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import RecommendResult from "./components/RecommendResult";

function App() {
  const [layoutData, setLayoutData] = useState([]);
  const fetchData = async (requestPayload) => {
    try {
      const response = await getLayoutConfig(requestPayload);
      setLayoutData(response);
      console.log(typeof response, response, JSON.stringify(response));
      console.log(layoutData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("LayoutData in useEffect:", layoutData);
  }, [layoutData]);

  const renderedContent = layoutData.map((element) => {
    return <RecommendResult onEnterData={element}/>
  });

  return (
    <div>
      <div>Hello World </div>
      <Searchbar onSubmit={fetchData} />
      <div>
        {renderedContent}
      </div>
    </div>
  );
}

export default App;
