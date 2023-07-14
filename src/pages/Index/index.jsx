import React, { useContext, useEffect } from 'react';
import PreHeader from '../../components/PreHeader';
import Header from '../../components/Header';
import BannerHome from '../../components/BannerHome';
import ProductsHome from '../../components/ProductsHome';
import Footer from '../../components/Footer';
import { MyIdContext } from '../../context/IdContext';
import api from '../../services/api';

export default function Index() {

    const {id, setId} = useContext(MyIdContext);

    return (
        <section>
            <PreHeader />
            <Header />
            <BannerHome />
            <ProductsHome />
            <Footer />
        </section>
    )
}