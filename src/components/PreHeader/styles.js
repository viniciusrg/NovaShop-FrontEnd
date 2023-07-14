import styled from 'styled-components';

export const Div = styled.div`
        background-color: var(--main-color);
        height: 2.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0rem 2rem;
        color: var(--bg-color);
        font-size: 1rem;

        p, tel{
            line-height: 0%;
        }

        @media (max-width: 425px) {
            padding: 0rem 1rem;
            font-size: .8rem;
        }
    `
export const Social = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
`