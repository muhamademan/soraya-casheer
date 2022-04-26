import logo from './logo.svg';
// import './App.css';
import NavbarComponent from './component/NavbarComponent';
import { Col, Row, Container } from 'react-bootstrap';
import ListCategories from './component/ListCategories';
import Hasil from './component/Hasil';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className='mt-3'>
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Daftar Product</strong></h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
