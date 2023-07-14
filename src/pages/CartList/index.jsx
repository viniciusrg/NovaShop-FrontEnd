import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PreHeader from '../../components/PreHeader';
import CartListComp from '../../components/CartListComp';

export default function CartList() {
    return (
        <section>
            <PreHeader />
            <Header />
            <CartListComp />
            <Footer />
        </section>
    )
}