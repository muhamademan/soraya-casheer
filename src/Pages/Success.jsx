import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'
import { Button, Image } from 'antd';
import axios from 'axios';
import { API_URL } from '../utils/Costants';

class Success extends Component {

    componentDidMount() {
        axios.get(API_URL + "keranjangs")
            .then((res) => {
                let keranjangs = res.data
                keranjangs.map((item) => {
                    return axios.delete(API_URL + "keranjangs/" + item.id)
                        .then((res) => {
                            console.log(res)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
            })
            .catch(error => {
                console.log('Error yaaa : ', error)
            })
    }

    render() {
        return (
            <div className='mt-4 text-center'>
                <Image src='assets/images/success.png' width='400px' />
                <h2>Success</h2>
                <p>Thank's, Your Ordered Has Been Confirmed!</p>
                <Button type='primary' shape='round'>
                    <Link to={'/'}>Back Home</Link>
                </Button>
            </div>
        )
    }
}

export default Success