import React from 'react';
import '../index.scss';
import Navigation from './Navigation';
import Content from './Content';
import Book from './Book';
// import Information from './Wrapper/Information';
// import Service from './Wrapper/Service';
// import Galery from './Wrapper/Galery';
// import Contact from './Wrapper/Contact';

const Container = () => (
    <>
    <div className="container__background-image">
    <Navigation />,
    <Content />
    </div>
    <Book />
    </>
);

export default Container;