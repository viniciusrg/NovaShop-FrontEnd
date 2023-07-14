import React, { useContext } from 'react';
import {Prod, Button, ProdPrice, ProdTitle} from './styles';
import pcsp from '../../assets/perito-criminal.jpeg';
import pmsp from '../../assets/pm-sp-soldado.png';
import pmerj from '../../assets/pmerj-curso-2.png';
import api from '../../services/api';
import { MyIdContext } from '../../context/IdContext';

export default function Product({ name, price, sku }) {

    const {id, setId} = useContext(MyIdContext);

    function handleImage() {
        switch (sku) {
            case 'p3':
                return pcsp;
            case 'p2':
                return pmsp;
            case 'p1':
                return pmerj;
            default:
                return pmsp;
        }
    }

    function handleAddCart(e) {
        api.get(`add-cartItem?id=${id}&sku=${sku}&qnt=1`)
        .then((res)=>{
            e.target.textContent = 'Produto adicionado';
            window.location.href = '/cart';
        })
        .catch((error)=>{
            console.log(error.response.data +  ' Error message: ' + error);
        })
    }
    return (
        <Prod>
            <img src={handleImage()} alt='Imagem do produto' />
            <ProdTitle>{name}</ProdTitle>
            <ProdPrice>R$ {price}</ProdPrice>
            <Button onClick={(e)=>handleAddCart(e)}>Comprar</Button>
        </Prod>
    )
}