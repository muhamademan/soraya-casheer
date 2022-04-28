import NavbarComponent from './component/NavbarComponent';
import { Col, Row, Container } from 'react-bootstrap';
import ListCategories from './component/ListCategories';
import Hasil from './component/Hasil';
import React, { Component, Fragment } from 'react'
import { API_URL } from './utils/Costants'
import axios from 'axios';
import Menus from './component/Menus';

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     menus: []
  //   }
  // }

  state = {
    menus: []
  }

  componentDidMount() {
    axios.get(API_URL + "products")
      .then((res) => {
        this.setState({
          menus: res.data
        })
      })
      .catch(error => {
        console.log('Error : ', error);
      })
  }

  render() {

    const { menus } = this.state

    return (
      <Fragment>
        <div className="App">
          <NavbarComponent />
          <div className='mt-3'>
            <Container fluid>
              <Row>
                <ListCategories />
                <Col>
                  <h4><strong>Daftar Produk</strong></h4>
                  <hr />
                  <Row>
                    {
                      menus && menus.map((menu) => {
                        return <Menus
                          key={menu.id}
                          data={menu} />
                      })
                    }
                  </Row>
                </Col>
                <Hasil />
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
