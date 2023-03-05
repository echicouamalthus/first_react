import List from "./List";

import { useState,useEffect } from "react";

const Home = () => {

    const [blogs, setblogs] = useState("")    

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then( (response) => {
                return response.json()
                
            } )
            .then((data) => {
                setblogs(data)
            })         
    },[])

    return ( 
        <div className="home">
            { blogs && <List blogs= {blogs} titre = {'la Liste des Blogs'}/> }
        </div>
     );
}
 
export default Home;