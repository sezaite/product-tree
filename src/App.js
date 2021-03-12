import Form from './components/Form'

function App() {
  return (
    <div className="product-tree">
      <Form label='Add new category' />
      <Form label='Add new product' />
      <Form label='Set price' />
    </div>
  );
}

export default App;
