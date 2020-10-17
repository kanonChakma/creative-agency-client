import React from 'react';
import Allcompany from '../Allcompany/Allcompany';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Allcompany></Allcompany>
            <Services></Services>
            <Slider></Slider>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};
export default Home;