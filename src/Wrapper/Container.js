import React from 'react';
import '../index.scss';
import Navigation from './Navigation';
import Content from './Content';
import Book from './Book';
import Information from './Information';
import Service from './Service';
import Contact from './Contact';
import App from '../App/App';

const Container = () => (
    <>
    <div className="container__background-image">
    <Navigation />
    <Content />
    </div>
    <Book />
    <App />
    <Information />
    <Service />
    <Contact />
    </>
);

export default Container;