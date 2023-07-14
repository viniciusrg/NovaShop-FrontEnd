import React from 'react';
import PreHeader from '../../components/PreHeader';
import Header from '../../components/Header';
import CartContainer from '../../components/CartContainer';
import Footer from '../../components/Footer';

export default function Cart () {
    return(
       <section>
        <PreHeader />
        <Header />
        <CartContainer />
        <Footer />
       </section>
    )
}