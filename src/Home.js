import { useState } from "react";
import Example from './Example';
import Scale from "./scale";
import Contact from "./contactus";
import Navbar from "./navbar";
import Content from "./content";
import Chatbot from "react-chatbot-kit";
import Navbarv2 from "./navbarv2";

import Section2 from "./section2";
import CTA from "./CTA";
import Footer from "./website/footer";
import CTA2 from "./CTA2";




const Home = () => {

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
            <Navbarv2></Navbarv2>
            <Example></Example>
            
            
            <Content></Content>
            <Section2></Section2>
            <CTA2></CTA2>
            <Footer></Footer>            
            
            {/* Add the Chatbot component here */}
            
        </div>
    );
}

export default Home;
