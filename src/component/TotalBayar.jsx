import { Button } from 'antd';
import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { withRouter } from '../utils/withRouter';
import 'antd/dist/antd.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../utils/Costants';

class TotalBayar extends Component {

    constructor() {
        super()
        this.submitTotalbayar = this.submitTotalbayar.bind(this);
    }

    submitTotalbayar = (TotalBayar) => {
        const pesanan = {
            total_bayar: TotalBayar,
            menus: this.props.keranjangs
        }
        // pesanan masuk lalu langsung pindah ke halaman Success
        axios.post(API_URL + "pesanans", pesanan)
            .then((res) => {
                this.props.navigate('/success')
            })
    }

    PrintTotalOrder = (TotalBayar) => {
        const struk = {
            total_bayar: ''
        }
    }

    // setRef = (ref) => (this.canvasEl = ref);

    render() {
        const TotalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);

        return (
            <>
                {/* for web */}
                <div className='fixed-bottom d-none d-md-block'>
                    {/* Start : If condition your order is empty. so, button payment is must disable */}
                    {
                        TotalBayar !== 0
                            ?
                            <Row>
                                <Col md={{ span: 3, offset: 9 }} className="px-4">
                                    <hr />
                                    <h4>Total Harga : <strong className='px-4'>Rp. {numberWithCommas(TotalBayar)}</strong></h4>
                                    <Button type='primary' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.submitTotalbayar(TotalBayar)}>
                                        <FontAwesomeIcon icon={faShoppingCart} />&nbsp;<strong>Payment Orders</strong>
                                    </Button>
                                    <Button type='warning' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.PrintTotalOrder(TotalBayar)}>
                                        <FontAwesomeIcon icon={faPrint} />&nbsp;<strong>Print Order</strong>
                                    </Button>
                                </Col>
                            </Row>
                            :
                            <Row>
                                <Col md={{ span: 3, offset: 9 }} className="px-4">
                                    <hr />
                                    <h4>Total Harga : <strong className='px-4'>Rp. {numberWithCommas(TotalBayar)}</strong></h4>
                                    <Button type='primary' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.submitTotalbayar(TotalBayar)} disabled>
                                        <FontAwesomeIcon icon={faShoppingCart} />&nbsp;<strong>Payment Orders</strong>
                                    </Button>
                                    <Button type='warning' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.PrintTotalOrder(TotalBayar)} disabled>
                                        <FontAwesomeIcon icon={faPrint} />&nbsp;<strong>Print Order</strong>
                                    </Button>
                                </Col>
                            </Row>
                    }
                    {/* End Conditional */}
                </div>


                {/* for mobile */}
                <div className='d-sm-block d-md-none'>
                    {/* Start : If condition your order is empty. so, button payment is must disable */}
                    {
                        TotalBayar !== 0
                            ?
                            <Row>
                                <Col md={{ span: 3, offset: 9 }} className="px-4">
                                    <hr />
                                    <h4>Total Harga : <strong className='px-4'>Rp. {numberWithCommas(TotalBayar)}</strong></h4>
                                    <Button type='primary' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.submitTotalbayar(TotalBayar)}>
                                        <FontAwesomeIcon icon={faShoppingCart} />&nbsp;<strong>Payment Orders</strong>
                                    </Button>
                                    <Button type='warning' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.PrintTotalOrder(TotalBayar)}>
                                        <FontAwesomeIcon icon={faPrint} />&nbsp;<strong>Print Order</strong>
                                    </Button>
                                </Col>
                            </Row>
                            :
                            <Row>
                                <Col md={{ span: 3, offset: 9 }} className="px-4">
                                    <hr />
                                    <h4>Total Harga : <strong className='px-4'>Rp. {numberWithCommas(TotalBayar)}</strong></h4>
                                    <Button type='primary' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.submitTotalbayar(TotalBayar)} disabled>
                                        <FontAwesomeIcon icon={faShoppingCart} />&nbsp;<strong>Payment Orders</strong>
                                    </Button>
                                    <Button type='warning' block className='mb-2 mt-2' shape='round' size='large' onClick={() => this.PrintTotalOrder(TotalBayar)} disabled>
                                        <FontAwesomeIcon icon={faPrint} />&nbsp;<strong>Print Order</strong>
                                    </Button>
                                </Col>
                            </Row>
                    }
                    {/* End Conditional */}
                </div>
            </>
        )
    }
}

export default withRouter(TotalBayar)