/* lo primero que necesito es path que es un modulo que existe en node y lo añado con const de dónde? lo voy a requerir de path */
const path = require("path");
/* Y voy a instanciar el plugin que instale */
const HtmlWebPackPlugin = require("html-webpack-plugin");

/* Creo un modulo que exportare con está configuración y para esto hago module.exports que es igual a este objeto y dentro configuro c/u de los elementos que necesito partiendo por la entrada  y  hago referncia al archivo ppal que se encuentra dentro de src, luego tendré un output (producción) que es dónde voy a guardar mis archivos resultantes cuando haga la compilación y le creo este objeto y dentro necesito path para decirle dónde se va a guardar y necesito path que instancie en la 1er línea seguido del resolve (resolver) que permite detectar el directorio dónde me encuentro pasandole un directorio en el cuál voy a guardar los archivos y con esto usare el filename para ponerle un nombre al archivo ppal Luego añado un elemento que resuelve las extenciones que usare en el proyecto, tengo resolve con su objeto dónde uso las extensiones, tiene un arreglo [] al que le paso 2 elementos, la extension de .js y .jsx
Luego creo un modulo con las reglas necesarias para el proyecto,module y creo las reglas, creoun arreglo [] dónde voy a trabajar con la regla ppal que es la identificación de los archivos en js y jsx, le paso una regExp que permite identificar los archivos de js y jsx,luego paso la exclusión de la carpeta de node modules, ahora uso el loader que instale que es usar babel.
Luego creo una nueva regla que me permite trabajar con los arcivos de HTML, creo ese test con la regExp ahora para HTML, aquí no excuyo nada sino usar el loader que instalamos y le paso ese load.
Y al final añado los plugins que necesito, creando una nueva referencia al Html-webpack-plugin y le paso un objeto con la configuración que necesito como el template que está en la carpeta de public que es dónde está úbicado el template que tengo y luego el que va a tener, a su vez necesito el filename */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};

/* Ahora me voy al package.json para crear mi scrip que va a compilar mi proyecto y allí creo uno nuevo llamado build y le paso su configuración, despues voy a la terminal para correr el 1er compilado del proyecto
Despues de compilarlo reviso que este la carpeta dist con 2 archivos ppales el index.html que es una copia fiel del archivo index.html de public pero tiene una pequeña diferencia y es que webpack me ayuda a compilar los archivos en JS  pero también añade dentro de este template la líne script que es muy importante para añadir a mi proyecto todo lo que estamos haciendo con react y bundle.js si abro este último veo el código de todo el archivo compilado */
