import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import { useState, useEffect } from "react";
import Nav from "./components/nav/Nav";
import Swal from "sweetalert2";
import axios from "axios";

function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const fetchAllData = async (url) => {
    const allData = await axios.get(url);
    setInfo(allData.data.info);
    // console.log(allData.data.info.count);
  };
  useEffect(() => {
    fetchAllData(url);
    
  }, []);

  const onSearch = async (character) => {
    const res = await fetch(
      `${url}/${character}`
    );
    const data = await res.json();

    //*verifico si se encuentra, y luego si no esta repetido, entonces lo agrego al estado.
    //utiliza sweetalert2 para la ventana modal
    if (!data.id) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Este personaje no existe",
        showConfirmButton: false,
        timer: 1500,
      });
      data.id=null;
    }

    if (data.id) {
      if (characters.some((char) => char.id === data.id)) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Personaje repetido",
          showConfirmButton: false,
          timer: 1500,
        });
        data.id=null;
      } else {
        setCharacters((characters) => [...characters, data]);
        // setIsRepeated(false)
      }
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} info={info.count} />
      <div>
        <Cards onClose={onClose} characters={characters} />
      </div>
    </div>
  );
}
export default App;
