import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import MainPage from '../MainPage.jsx/MainPage';
import Footer from '../Header/Footer/Footer';
import Loading from '../Loading/Loading';

const Home = () => {
    const navigation = useNavigation()
    console.log(navigation);
    return (
        <>
            <Header />
            {
                navigation.state === "loading" ? <div className='flex justify-center items-center h-screen'><progress className="progress w-56 "></progress></div> : <Outlet></Outlet>
            }

            <Footer></Footer>

        </>
    );
};

export default Home;