/* Necesito mi punto de entrada que es el 1er archivo que será detectado y que voy a trabajar con toda la configuración de react y es el archivo index.js en la raíz de src en el que estoy y añado las configuraciones necesarias 1ro importo react */
import React from "react";
//Ahora uso react-dom que es la librería que también funciona al mismo tiempo con react para empujar todo lo que haga con react hacia el navegador por eso es importante este elemento
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";

/* Aquí VSCode me ayudara mucho por las herramientas que permite autocomplementar estos elementos
No creo un componente sino que uso react-dom para pasarle este componente, lo creo y uso un método de el llamado render y lo que necesito es importar mi componente arriba, ya importade aquí dentro de render lo voy a añadir y render recibe 2 parámetros ppalmente, 1ro el componente y el otro es dónde voy a empujar este componente, que es en el elemento del HTML que voy a crear también entonces el 1er parametro el componente cerrandolo en etiqueta y coma , para pasar el 2do parámetro   document.getElementById y aquí le paso ese ID que voy a usar dentro de mi aplicación al cuál lo llamo App*/
ReactDOM.render(<HelloWorld />, document.getElementById("app"));

/* He creado mi archivo principal, mi entrada de configuración, aquí voy a añadirle mi aplicación completa y luego dónde la voy a empujar, tengo que ir al archivo de public index.html y allí creo una configuración que funcione para poder empujar mi aplicación en react voy para allá */
