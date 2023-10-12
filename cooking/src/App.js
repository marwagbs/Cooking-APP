import * as React from "react";
import MediaCard from "./Components/Card";



function App() {
  const [data, useData]=React.useState([]);
  
  return (
    <div className="App">
      <MediaCard />
    </div>
  );
}

export default App;
