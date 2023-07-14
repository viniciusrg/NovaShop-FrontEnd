import React, { useContext } from 'react';
import styled from 'styled-components';
import pcsp from '../../assets/perito-criminal.jpeg';
import pmsp from '../../assets/pm-sp-soldado.png';
import pmerj from '../../assets/pmerj-curso-2.png';
import api from '../../services/api';
import { MyIdContext } from '../../context/IdContext';

const Item = styled.div`
        width: 100%;
        height: auto;
        padding: 1rem 0rem;
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;

        div{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
        }

        img{
            width: 200px;
            box-shadow: var(--shadow);
        }
    `

const ProdTitle = styled.h3`
        margin: .5rem 0rem;
    `

const ProdPrice = styled.p`
        margin: 0rem;
        font-size: .8rem;
    `

const Delete = styled.p`
        color: blue;
        cursor: pointer;
    `

export default function CardItem({ sku, name, price }) {

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

    function handleDeleteItem () {
        try{
            api.get(`remove-cartItem/${id}/${sku}`)
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
        <Item>
            <div>
                <img src={handleImage()} alt='Imagem do produto' />
                <ProdTitle>{name}</ProdTitle>
            </div>
            <Delete onClick={()=>handleDeleteItem()}>Excluir item</Delete>
            <ProdPrice>R$ {price}</ProdPrice>
        </Item>
    )
}