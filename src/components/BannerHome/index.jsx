import React from 'react';
import styled from 'styled-components';
import img from '../../assets/banner01.jpeg';

const Banner = styled.div`
        width: 100%;
        height: 500px;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `

export default function BannerHome (){

    return(
        <Banner />
    )
}