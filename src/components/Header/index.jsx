import React, { useContext, useEffect, useState } from 'react';
import {DivCart, HeaderContent, ItemCart, Menu, Search} from './styles';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { MyIdContext } from '../../context/IdContext';
import api from '../../services/api';

export default function Header({setProductFilter, products}) {

    const { id, setId } = useContext(MyIdContext);
    const [itemCart, setItemCart] = useState();

    useEffect(() => {
        try {
            api.get(`cartItems/${id}`)
                .then((res) => {
                    const length = res.data[0].length;
                    setItemCart(length);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        catch (error) {
            console.log(error);
        }
    }, [itemCart])

    function handleSearch(e){
        const item = products.filter((item) => item.name.startsWith((e.target.value).toUpperCase()));
        setProductFilter(item);
    }

    return (
        <HeaderContent>
            <img src={logo} alt='Logo' />
            <Menu>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/cartList'><li>Lista de carrinhos</li></Link>
                </ul>
            </Menu>
            <Search>
                <Link to='/search'>
                    <AiOutlineSearch />
                    <input type='text' placeholder='Buscar por produto...' onKeyUp={(e)=>handleSearch(e)}/>
                </Link>
            </Search>
            <DivCart>
                <Link to='/cart'>
                    <AiOutlineShoppingCart />
                    <ItemCart>
                        {itemCart ? itemCart : '0'}
                    </ItemCart>
                </Link>
            </DivCart>
        </HeaderContent>
    )
}