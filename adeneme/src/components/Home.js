import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'

const Home = () => {

const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
]);



const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id );
    setBlogs(newBlogs);
};

useEffect(()=>{
    fetch("http://localhost:3000/blogs")
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
},[]);


  return (
    <div className="home">
      <BlogList  blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
      
    </div>
  )
}

export default Home
