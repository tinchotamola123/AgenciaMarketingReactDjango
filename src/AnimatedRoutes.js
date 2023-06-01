import { BrowserRouter as Router , Route , Routes , useLocation} from "react-router-dom";
import Services from "containers/pages/Services";
import Cases from "containers/pages/Cases";
import About from "containers/pages/About";
import Careers from "containers/pages/Carreers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

import {AnimatePresence } from "framer-motion";
import Category from "containers/pages/Category";
import Search from "containers/pages/Search";
import PostDetail from "containers/pages/PostDetail";

function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* Error Page */}
                <Route path="*" element={<Error404 />}></Route>
                {/* Home Page */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/casos" element={<Cases />}></Route>
                <Route path="/servicios" element={<Services />}></Route>
                <Route path="/nosotros" element={<About />}></Route>
                <Route path="/carreras" element={<Careers />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/blog/:slug" element={<PostDetail />}></Route>
                <Route path="/s=:term" element={<Search />}></Route>
                <Route path="/category/:slug" element={<Category />}></Route>
                <Route path="/contacto" element={<Contact />}></Route>
            </Routes>
        </AnimatePresence>
        
    )
}

export default AnimatedRoutes