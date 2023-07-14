import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
        width: 1200px;
        height: auto;
        display: block;
        align-items: center;
        margin: 3rem auto;

        @media (max-width: 1024px) {
                width: 90%;
        }

        @media (max-width: 768px) {

        }
    `

export default function Container({ children }) {

    return (
        <Cont>
            {children}
        </Cont>
    )
}