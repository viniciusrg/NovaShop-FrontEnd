import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import CartList from "./pages/CartList";
import { MyIdContextProvider } from "./context/IdContext";
import Search from "./pages/Search";

function AppRoutes() {

    return (
        // Alterar manualmente o ID do carrinho.
        <MyIdContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cartList" element={<CartList />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </MyIdContextProvider>
    )
}

export default AppRoutes;