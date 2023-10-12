import React, { useEffect, useState } from "react";
import MediaCard from "./Components/Card";
import axios from "axios";
import "./index.css"

function App() {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch]=useState("");
 

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data.meals);
      });
  }, [inputSearch]);

  return (
    <>
      <h1>Cooking APP</h1>
      <div>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Type the name of a food"
          onChange={(e)=>setInputSearch(e.target.value)}
        ></input>
      </div>

      <div className="card">
        
        {
        data &&
        data.map((item) => {
          return (
            <div key={item.idMeal}>
              <MediaCard
                title={item.strMeal}
                origin={item.strArea}
                src={item.strMealThumb}
                description={item.strInstructions}
                alt={item.strMeal}
                source={item.strSource}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
