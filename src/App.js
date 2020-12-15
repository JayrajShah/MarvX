import React, { useEffect, useState } from "react";
import { getAllCharacters } from "./api";
import Backdrop from "./Backdrop";
import Characters from "./Characters";
function App() {
  //States
  const [characters, setCharacters] = useState([]);
  const [Obj, setObj] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // UseEffect
  useEffect(() => {
    getAllCharactersAsync();
  }, []);

  // Functions and handlers
  const getAllCharactersAsync = async (offset = 0) => {
    setIsLoading(true);
    await getAllCharacters(offset)
      .then((res) => {
        console.log(res);

        setCharacters((prevChars) => {
          return [...prevChars, ...res.data.results];
        });
        setObj(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handleLoadMore = () => {
    let limit = Obj.limit;
    let curroffset = Obj.offset;
    let newOffset = curroffset + limit;
    getAllCharactersAsync(newOffset);
  };

  return (
    <div>
      {isLoading && <Backdrop />}
      <div
        style={{
          margin: "0 15xp 15px 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "60px" }}>MarvX</h1>
          <p style={{ fontWeight: "bold", color: "#777" }}>
            Not all heroes wear capes
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {characters.map((ch, idx) => (
          <Characters
            name={ch.name}
            key={ch.id}
            src={ch.thumbnail.path}
            extension={ch.thumbnail.extension}
            obj={ch}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isLoading && <button onClick={handleLoadMore}>Load More..</button>}
      </div>
    </div>
  );
}

export default App;
