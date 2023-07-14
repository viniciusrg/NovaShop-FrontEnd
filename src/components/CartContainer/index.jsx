import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import CardItem from '../CartItem';
import ContainerCart from '../ContainerCart';
import Container from '../Container';
import Summary from '../Summary';
import { MyIdContext } from '../../context/IdContext';
import api from '../../services/api';
import {v4 as uuidv4} from 'uuid';

const CardContainer = styled.div`
        width: 100%;
        height: auto;
        background-color: #fff;
        border-radius: .8rem;
        box-shadow: var(--shadow);
        padding: 1rem 1rem;
    `

const Label = styled.div`
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
    `

export default function CartContainer() {

    const { id, setId } = useContext(MyIdContext);
    const [products, setProducts] = useState();

    useEffect(() => {
        try {
            api.get(`cartItems/${id}`)
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
                Carrinho de compras
            </Title>
            <ContainerCart>
                <div>
                    <Label>
                        <label>Produto(s)</label>
                        <label>Remover item</label>
                        <label>Valor unitário</label>
                    </Label>
                    <CardContainer>
                        {
                            products?.length > 0 ? 
                            products?.map((item)=>{
                                return(
                                    <CardItem key={uuidv4()} sku={item.sku} name={item.name} price={item.price} />
                                )
                            })
                            : 'Carrinho vazio'
                        }
                    </CardContainer>
                </div>
                <div>
                    <Summary products={products} />
                </div>
            </ContainerCart>
        </Container>
    )
}