import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [quotes,setQuotes]=useState('')
  const [author, setAuthor]=useState('')
  const getQuotes = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((ref) => {
        setQuotes(ref.data.content)
        setAuthor(ref.data.author)
        console.log(ref.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button className="btn-1" onClick={getQuotes}><b>how about to shut the fuck up</b></button>
      <h2>{quotes}</h2>
      <h3 style={{color:'red'}}>{author}</h3>
    </div>
  );
}

export default App;
