import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const FooterContent = styled.footer`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--main-color);
        color: var(--bg-color);

        img {
            margin: 3rem 0rem;
            filter: saturate(0) brightness(100);
            width: 180px;
            height: auto;
        }
    `

export default function Footer () {
    
    return (
        <FooterContent>
            <img src={logo} alt='Logo' />
            <p>Todos os direitos reservados - NovaShop 2023 ©</p>
        </FooterContent>
    )
}