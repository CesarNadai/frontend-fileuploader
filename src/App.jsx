import './App.css';
import React, { useState, useRef } from 'react';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {

  const fileRef = useRef(null)
  const [fileS, setFileS] = useState("Selecione um arquivo")

  function getNameFile() {
    document.getElementById("img-input").addEventListener("change", () => {
      setFileS("Arquivo selecionado!")
  })}

  return (
    <main>
      <form action="http://localhost:4000/post-file" method='post' encType='multipart/form-data'>
        <label className='text-center'>{fileS}</label>
        <label htmlFor="img-input"><i><FontAwesomeIcon icon={faFileLines}/></i></label>
        <input type="file" name="file" id='img-input' ref={fileRef} onClick={getNameFile} required/>
        <button type='submit'>Postar arquivo</button>
        <h5>Nota: Qualquer pessoa poderá ver o seu arquivo postado!</h5>
      </form>
    </main>
  );
}

export default App;
