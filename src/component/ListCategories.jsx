import axios from 'axios';
import React, { Component } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { API_URL } from '../utils/Costants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCoffee, faCheese } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ nama }) => {
    if (nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} className='mr-2' />
    if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />
    if (nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} className='mr-2' />

    return <FontAwesomeIcon icon={faUtensils} className='mr-2' />
}

class ListCategories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get(API_URL + "categories")
            .then((res) => {
                this.setState({
                    categories: res.data
                })
            })
            .catch(err => {
                console.log('Error : ', err);
            })
    }

    render() {

        const { categories } = this.state
        const { changeCategory, chooseCategory } = this.props

        return (
            <Col md={2} mt='2'>
                <h4><strong>List Categories</strong></h4>
                <hr />
                <ListGroup variant='flush'>
                    {
                        categories && categories.map((category) => {
                            return <ListGroup.Item key={category.id} onClick={() => changeCategory(category.nama)} className={chooseCategory === category.nama && "category-active"} style={{ cursor: 'pointer', borderRadius: '12px' }}>
                                <Icon nama={category.nama} /> {category.nama}
                            </ListGroup.Item>
                        })
                    }
                </ListGroup>
            </Col>
        )
    }
}

export default ListCategories