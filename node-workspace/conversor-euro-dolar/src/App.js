
import './App.css';
import  {useRef, useState, useEffect} from "react";

function App() {

  const[ValorCambio, setValorCambio]=useState(null);
 
  const cantidadConvertirRef=useRef();

  const cantidadConvertidaRef=useRef();

  const mesajeRef=useRef();

  useEffect(() => {

const llamdaApiCambio=async()=>{

  try {
    const respuesta=await fetch('https://v6.exchangerate-api.com/v6/dba662878467ca12d1024b1c/latest/EUR');

    const datos=await respuesta.json();

    console.log(datos);

    setValorCambio(datos.conversion_rates.USD);

  }catch(error){

    console.error("Error al acceder a la API", error);

  }


  };

  llamdaApiCambio();

  }, []);

  const conversionEuro = () =>{
    const eurosValor=cantidadConvertirRef.current.value;
    
    const dolares = eurosValor * ValorCambio;
    
    cantidadConvertidaRef.current.innerHTML=dolares.toFixed(2) + " $";

    mesajeRef.current.innerHTML="¡Buena idea convertir! Ahora invierte en Bitcoin como el bueno de Elon Musk 🚀";
 

  } 
 
 
  return <div>
    <h1>Conversor de Euro a Dolar</h1>
    <input className='conversor' type= "text" ref={cantidadConvertirRef}></input><br/>
    <button className='conversor' onClick={conversionEuro}>Convertir</button>
    <h2>Cantidad Convertida:</h2>
    <div className='resultado' ref={cantidadConvertidaRef }></div>
    <p className='resultado' ref={mesajeRef}></p>

  </div>
}

export default App;
