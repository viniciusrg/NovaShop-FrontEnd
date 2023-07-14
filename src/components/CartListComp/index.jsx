import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Cart from '../Cart';
import Title from '../Title';
import { MyIdContext } from '../../context/IdContext';
import {v4 as uuidv4} from 'uuid';
import api from '../../services/api';

const CartCont = styled.div`
        width: 100%;
        height: auto;
        background-color: #fff;
        box-shadow: var(--shadow);
        border-radius: .8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    `



export default function CartListComp() {

    const {id, setId} = useContext(MyIdContext);
    const [cart, setCart] = useState();

    useEffect(()=>{
        try{
            api.get('carts')
            .then((res)=>{
                setCart(...res.data);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    },[])

    return (
        <Container>
            <Title>
                Lista de todos os carrinhos
            </Title>
            <CartCont>
                {
                    cart?.map((item)=>{
                        return (
                            <Cart key={uuidv4()} idCart={item.id} status={item.status} />
                        )
                    })
                }
            </CartCont>
        </Container>
    )
}