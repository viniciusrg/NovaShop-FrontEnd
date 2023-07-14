import React from 'react';
import styled from 'styled-components';

const TitleH1 = styled.h1`
        font-size: 2rem;
    `

export default function Title({ children }) {

    return (
        <TitleH1>
            {children}
        </TitleH1>
    )
}