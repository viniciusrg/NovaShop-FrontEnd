import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Title from '../Title';
import Product from '../Product';
import api from '../../services/api';
import { v4 as uuidv4 } from 'uuid';

const ProductDiv = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        /* display: grid;
        grid-template-columns: auto auto auto; */
        gap: 2rem;
        justify-content: space-around;
        align-items: center;
        margin: 3rem 0rem;
    `

export default function ProductsHome() {

    const [products, setProducts] = useState();

    useEffect(() => {
        try {
            api.get('/products')
                .then((res) => {
                    setProducts(...res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <Container>
            <Title>
                Produtos em destaque
            </Title>
            <ProductDiv>
                {
                    products?.map((item) => {
                        return(
                            <Product key={uuidv4()} name={item.name} sku={item.sku} price={item.price} />
                        )
                    })
                }
            </ProductDiv>

        </Container>
    )
}