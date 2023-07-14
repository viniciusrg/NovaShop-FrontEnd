import styled from 'styled-components';

export const HeaderContent = styled.div`
        height: auto;
        padding: 2rem;
        background-color: var(--bg-color);
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: var(--shadow);

        @media (max-width: 768px) {
            img{
                width: 110px;
            }
        }

        @media (max-width: 768px) {
            font-size: .8rem;
        }
    `

export const Menu = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            list-style: none;
        }

        ul li{
            display: inline;
            margin-right: 1rem;
        }
    `

export const DivCart = styled.div`
    position: relative;

    svg {
        font-size: 2rem;
    }

    @media (max-width: 425px) {
            svg{
                font-size: 1.5rem;
            }
        }
`

export const ItemCart = styled.div`
        width: 15px;
        height: 15px;
        padding: .15rem;
        background-color: var(--main-color);
        border-radius: 100%;
        color: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        position: absolute;
        top: -8px;
        right: -8px;
    `

export const Search = styled.div`
        display: flex;
        align-items: center;
        position: relative;

        svg {
            font-size: 1.2rem;
            position: absolute;
            right: .8rem;
            top: .4rem;
        }

        input{
            border: none;
            background-color: var(--bg-color);
            box-shadow: var(--shadow);
            border-radius: .8rem;
            width: 350px;
            line-height: 2rem;
            padding: 0rem .8rem;
        }

        input:focus{
            outline-color: var(--main-color);
        }

        @media (max-width: 768px) {
            input{
                width: 100%;
            }
            
            svg{
                right: -1rem;
            }
        }

        @media (max-width: 425px) {
            display: none;
        }
    `