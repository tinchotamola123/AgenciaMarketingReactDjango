import Features from "components/carrers/Features2";
import Header from "components/carrers/Header";
import LogoCloud from "components/carrers/LogoCloud";
import PositionList from "components/carrers/PositionList";
import Testimonial from "components/carrers/Testimonials";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import {useEffect} from "react";

function Careers(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Testimonial/>
                <LogoCloud/>
                <Features/>
                <PositionList/>
            </div>
            <Footer />
        </Layout>
    )
}

export default Careers