import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils'

const Menus = (menu) => {
    return (
        // <div>
        //     <p>{menu.data.nama}</p>
        // </div>
        <Col md={4} mx={6} className='mb-4'>
            <Card className='shadow'>
                <Card.Img variant="top" src={"assets/images/" + menu.data.category.nama.toLowerCase() + "/" + menu.data.gambar} />
                <Card.Body>
                    <Card.Title>{menu.data.nama} <strong>({menu.data.kode})</strong></Card.Title>
                    <Card.Text>Rp. {numberWithCommas(menu.data.harga)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus