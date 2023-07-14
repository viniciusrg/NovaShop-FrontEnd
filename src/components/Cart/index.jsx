import React, { useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import api from '../../services/api';

const Div = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 1rem 0rem;
        box-shadow: var(--shadow);

        svg{
            font-size: 2rem;
        }

        p:last-child{
            color: blue;
            cursor: pointer;
        }

        @media (max-width: 425px) {
            font-size: .8rem;   
        }
    `

export default function Cart({idCart, status}) {

    function handleDelete(){
        try{
            api.get(`remove-cart/${idCart}`)
            .then((res)=>{
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <Div>
            <AiOutlineShoppingCart />
            <p>ID do cart: {idCart}</p>
            <p>Status: {status}</p>
            <p onClick={()=>handleDelete()}>Excluir carrinho</p>
        </Div>
    )
}