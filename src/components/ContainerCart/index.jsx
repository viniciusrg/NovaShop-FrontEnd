import React from 'react';
import styled from 'styled-components';

const ContCart = styled.div`
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content: space-between;
        gap: 4rem;
    `

export default function ContainerCart({children}) {
    
    return(
        <ContCart>
            {children}
        </ContCart>
    )
}