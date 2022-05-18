import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils'

const Menus = ({ data, masukKeranjang }) => {

    return (
        // <div>
        //     <p>{menu.data.nama}</p>
        // </div>
        <Col md={4} mx={6} className='mb-4'>
            <Card className='shadow' onClick={masukKeranjang} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={"assets/images/" + data.category.nama.toLowerCase() + "/" + data.gambar} />
                <Card.Body>
                    <Card.Title>{data.nama} <strong>({data.kode})</strong></Card.Title>
                    <Card.Text>Rp. {numberWithCommas(data.harga)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus