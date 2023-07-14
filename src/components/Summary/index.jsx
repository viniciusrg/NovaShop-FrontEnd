import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyIdContext } from '../../context/IdContext';
import api from '../../services/api';

const Summ = styled.div`
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 1rem 2rem;
        margin-top: 1.3rem;
        box-shadow: var(--shadow);
        border-radius: .8rem;

        h6{
            margin: 0rem;
            padding: 0rem;
            font-size: 1rem;
        }

        p{
            font-size: .8rem;
        }

        hr{
            opacity: .5;
            width: 95%;
        }
    `

    const Button = styled.button`
        width: 100%;
        height: auto;
        padding: .8rem 0rem;
        border: none;
        border-radius: .8rem;
        box-shadow: var(--shadow);
        background-color: var(--main-color);
        color: var(--bg-color);
        font-weight: bold;
        font-size: 1rem;
        display: block;
        margin: 1rem auto;
        transition: .5s;
        cursor: pointer;

        &:hover{
            opacity: .9;
        }
`

export default function Summary({products}) {

    const {id, setId} = useContext(MyIdContext);

    function handleQuantity (){
        const length = products?.length;
        return length;
    }

    function handlePrice () {
        let calc = 0;
        products?.forEach(element => {
            calc += parseFloat(element.price);
        });
        return calc.toFixed(2);
    }

    function handleCheckout () {
        try{
            api.get(`checkout/${id}`)
            .then((res)=>{
                alert(res.data);
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
        <Summ>
            <h6>Resumo do pedido</h6>
            <hr />
            <p>Quantidade de items: {handleQuantity()}</p>
            <hr />
            <p>Valor total: <b>R${handlePrice()}</b></p>
            <Button onClick={()=>handleCheckout()}>Finalizar compra</Button>
        </Summ>
    )
}