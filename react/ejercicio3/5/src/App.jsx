import Card from "./Card";
import adios from "./adios.png";
function App() {
  return (
    <>
      <Card titulo="Bienvenida">
        <p>Este es el contenido de la primera tarjeta.</p>
        <button>Click aquí</button>
      </Card>

      <Card titulo="Despedida">
        <img src={adios} alt="adiós" />
      </Card>
    </>
  );
}

export default App;
