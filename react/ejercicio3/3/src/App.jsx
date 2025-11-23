import ListaProductos from './ListaProductos';
function App() {
  const productos = [
    { nombre: "Coca Cola", precio: 3 },
    { nombre: "Pepsi", precio: 3 },
    { nombre: "Fanta", precio: 3 }
  ];

  return (
    <>
      <h1>Lista de Productos</h1>
      <ListaProductos productos={productos} />
    </>
  );
}

export default App;

