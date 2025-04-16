import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Image from './Image';
import products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.url} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Card.Text>
          <Price/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
