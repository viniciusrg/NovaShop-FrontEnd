import styled from 'styled-components';

export const Prod = styled.div`
    width: auto;
    height: 300px;
`

export const ProdTitle = styled.h3`
        margin: .5rem 0rem;
    `

export const ProdPrice = styled.p`
        margin: 0rem;
        font-size: .8rem;
    `

export const Button = styled.button`
        width: 85%;
        height: auto;
        padding: .6rem 0rem;
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