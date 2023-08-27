import { useState } from "react";
import BlogList from "./blogList";
import Example from './Example';
import playful from "./palyfull";
import Scale from "./scale";
import Contact from "./contactus";
import Navbar from "./navbar";



const Home = () => {

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)

    }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    

        
    
    return ( 
        <div className="home">
           
           <Navbar></Navbar>
           <Example></Example>
           <Scale></Scale>
           <Contact></Contact>
           
        </div>
     );

    }

 
export default Home;

