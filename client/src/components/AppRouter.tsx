import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import AdminPanel from '../pages/AdminPanel';
import Authhorization from '../pages/Authhorization';
import Category from '../pages/Category';
import Exit from '../pages/Exit';
import Home from '../pages/Home';
import NewProduct from '../pages/NewProduct';
import Products from '../pages/Products';
import Layout from './Layout';

const AppRouter = () => {

    const { user } = useTypedSelector(state => state)

    if (user.is_login === false && user.is_admin === false) {
        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='category' element={<Category />} />
                    <Route path='newProduct' element={<NewProduct />} />
                    <Route path='authorization' element={<Authhorization />} />
                </Route>
            </Routes>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='category' element={<Category />} />
                    <Route path='newProduct' element={<NewProduct />} />
                    <Route path='authorization' element={<Authhorization />} />
                </Route>
            </Routes>
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='category' element={<Category />} />
                    <Route path='newProduct' element={<NewProduct />} />
                    <Route path='adminPanel' element={<AdminPanel />} />
                    <Route path='authorization' element={<Authhorization />} />
                </Route>
            </Routes>
        )
    }
    return <h1>error</h1>
}

export default AppRouter