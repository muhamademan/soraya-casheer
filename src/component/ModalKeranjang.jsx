import React from 'react';
import { Button } from 'antd';
import { Form, Modal } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import 'antd/dist/antd.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail, jumlah, keterangan, tambah, kurang, handleChange, handleSubmit, totalHarga, hapusPesanan }) => {
    if (keranjangDetail) {
        return (
            <div>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {keranjangDetail.product.nama}&nbsp;
                            <strong>(Rp. {numberWithCommas(keranjangDetail.product.harga)})</strong>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Total Harga : </Form.Label>
                                {/* <p><strong>Rp. {numberWithCommas(keranjangDetail.total_harga)}</strong></p> */}
                                <p><strong>Rp. {numberWithCommas(totalHarga)}</strong></p>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Jumlah Product : </Form.Label><br />
                                <Button type='primary' size='sm' onClick={kurang}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>
                                &nbsp;&nbsp;<strong>{jumlah}</strong>&nbsp;&nbsp;
                                <Button type='primary' size='sm' onClick={tambah}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </Form.Group><br />
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Keterangan : </Form.Label>
                                <Form.Control as="textarea" rows={3} name='keterangan' placeholder='Contoh : Pedas, Nasi Setengah, Dll.' value={keterangan} onChange={(event) => handleChange(event)} />
                            </Form.Group>
                            {/* <Button variant='primary' className='mt-3' shape='round'>Simpan</Button> */}
                            <Button type='primary' htmlType='submit' className='mt-3' shape='round'>Simpan</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />&nbsp;Hapus Pesanan
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    } else {
        return (
            <div>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Is Empty!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Is Empty!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalKeranjang