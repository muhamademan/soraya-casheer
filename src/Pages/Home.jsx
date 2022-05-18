// import NavbarComponent from '../component/NavbarComponent';
import { Col, Row, Container } from 'react-bootstrap';
import ListCategories from '../component/ListCategories';
import Hasil from '../component/Hasil';
import React, { Component, Fragment } from 'react'
import { API_URL } from '../utils/Costants'
import axios from 'axios';
import Menus from '../component/Menus';
import swal from 'sweetalert';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menus: [],
            chooseCategory: 'Makanan',
            keranjangs: []
        }
    }

    // state = {
    //   menus: [],
    //   chooseCategory: "Makanan"
    // }

    componentDidMount() {
        axios.get(API_URL + "products?category.nama=" + this.state.chooseCategory)
            .then((res) => {
                this.setState({
                    menus: res.data
                })
            })
            .catch(error => {
                console.log('Error : ', error);
            })

        // Axios get untuk menampilkan data pada hasil setelah product dipilih
        // axios.get(API_URL + "keranjangs")
        //     .then((res) => {
        //         this.setState({
        //             keranjangs: res.data
        //         })
        //     })
        //     .catch(error => {
        //         console.log('Error : ', error)
        //     })
        this.getListKeranjang()
    }

    // component didUpdate digunakan agar pada saat penambahan product ke hasil tidak perlu di reload
    // componentDidUpdate(prevState) {
    //     if (this.state.keranjangs !== prevState.keranjangs) {
    //         axios.get(API_URL + "keranjangs")
    //             .then((res) => {
    //                 this.setState({
    //                     keranjangs: res.data
    //                 })
    //             })
    //             .catch(error => {
    //                 console.log('Error : ', error)
    //             })
    //     }
    // }

    getListKeranjang = () => {
        axios.get(API_URL + "keranjangs")
            .then((res) => {
                this.setState({
                    keranjangs: res.data
                })
            })
            .catch(error => {
                console.log('Error : ', error)
            })
    }


    changeCategory = (value) => {
        this.setState({
            chooseCategory: value,
            menus: []
        })

        axios.get(API_URL + "products?category.nama=" + value)
            .then((res) => {
                this.setState({
                    menus: res.data
                })
            })
            .catch(error => {
                console.log('Error : ', error);
            })
    }


    masukKeranjang = (value) => {

        axios.get(API_URL + "keranjangs?product.id=" + value.id)
            .then((res) => {
                if (res.data.length === 0) {
                    const keranjang = {
                        jumlah: 1,
                        total_harga: value.harga,
                        product: value
                    }

                    // console.log("Menu : ", value)
                    axios.post(API_URL + "keranjangs", keranjang)
                        .then((res) => {
                            this.getListKeranjang()
                            swal({
                                title: keranjang.product.nama,
                                text: "Success Add To Cart!",
                                icon: "success",
                                button: false,
                                timer: 1500
                            });
                        })
                        .catch(error => {
                            console.log('Error : ', error)
                        })
                } else {
                    const keranjang = {
                        jumlah: res.data[0].jumlah + 1,
                        total_harga: res.data[0].total_harga + value.harga,
                        product: value
                    }

                    axios.put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
                        .then((res) => {
                            swal({
                                title: keranjang.product.nama,
                                text: "Success Add To Cart!",
                                icon: "success",
                                button: false,
                                timer: 1500
                            });
                        })
                        .catch(error => {
                            console.log('Error : ', error)
                        })

                }
            })
            .catch(error => {
                console.log('Error : ', error)
            })
    }


    render() {
        const { menus, chooseCategory, keranjangs } = this.state

        return (
            <Fragment>
                {/* <div className="App">
                    <NavbarComponent /> */}
                <div className='mt-3'>
                    <Container fluid>
                        <Row>
                            <ListCategories changeCategory={this.changeCategory} chooseCategory={chooseCategory} />
                            <Col>
                                <h4><strong>List Menus</strong></h4>
                                <hr />
                                <Row>
                                    {
                                        menus && menus.map((menu) => {
                                            return <Menus
                                                key={menu.id}
                                                data={menu}
                                                masukKeranjang={() => this.masukKeranjang(menu)}
                                            />
                                        })
                                    }
                                </Row>
                            </Col>
                            <Hasil keranjangs={keranjangs} {...this.props} getListKeranjang={this.getListKeranjang} />
                        </Row>
                    </Container>
                </div>
                {/* </div> */}
            </Fragment>
        )
    }
}

export default Home;
