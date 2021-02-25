import React from "react";
import "../assets/styles /App.scss";

/* Creo ese componente funcional que voy a utilizar, lo hago con una constante y luego la función flecha => y dentro empujo una etiqueta h1 */
const HelloWorld = () => <h1>Hola Mundo</h1>;

//Exporto el componente por default
export default HelloWorld;

/* Necesito mi punto de entrada que es el 1er archivo que será detectado y que voy a trabajar con toda la configuración de react y es el archivo index.js en la raíz de src lo abro y continuo allí */
