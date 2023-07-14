import React, { useEffect, useState } from 'react';
import PreHeader from '../../components/PreHeader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import styled from 'styled-components';
import Container from '../../components/Container';
import Product from '../../components/Product';
import {v4 as uuidv4} from 'uuid';

const ProductDiv = styled.div`
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 2rem;
        justify-content: space-around;
        align-items: center;
        margin: 3rem 0rem;
    `

export default function Search () {
    const [products, setProducts] = useState();
    const [productFilter, setProductFilter] = useState();

    useEffect(()=>{
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
    },[])
    
    return (
        <section>
            <PreHeader />
            <Header products={products} setProductFilter={setProductFilter} />
            <Container>
            <ProductDiv>
                {
                    productFilter?.length > 0 ? 
                    productFilter?.map((item) => {
                        return(
                            <Product key={uuidv4()} name={item.name} sku={item.sku} price={item.price} />
                        )
                    })
                    : products?.map((item) => {
                        return(
                            <Product key={uuidv4()} name={item.name} sku={item.sku} price={item.price} />
                        )
                    })
                }
            </ProductDiv>

        </Container>
            <Footer />
        </section>
    )
}