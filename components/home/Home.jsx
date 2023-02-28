import "./Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {TiSocialLinkedin} from 'react-icons/ti'
import {FaTwitter} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {MdOutlineExpandMore} from 'react-icons/md'


export default function Home() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://api.unsplash.com/search/photos?page=1&query=office&client_id=ffaLrlTReMWM5VSD8LmA7DLrtsaKLfeoDMhVqqhBU2k"
      );
      setData(res.data.results);

      console.log(res);
    }
    getData();
  }, []);

  return (
    <div>
      <span className="welcome">
        {" "}
        <span style={{ color: "blue", fontStyle: "italic" }}>Welcome </span>to
        the Blog web-app
      </span>
      {data.map((items, index) => {
        return (
          <div key={index}>
            <img src={items.urls.full} alt="" className="images" />
          </div>
        );
      })}

      <span className="post1">
        Blog Post:1-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
       <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post2">
        Blog Post:2-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
        <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post3">
        Blog Post:3-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
        <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post4">
        Blog Post:4-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
        <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post5">
        Blog Post:5-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
        <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post6">
        Blog Post:6-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
        <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post7">
        Blog Post:7-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
         <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post8">
        Blog Post:8-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
         <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>
      <span className="post9">
        Blog Post:9-Custom:
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
         <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>

      <span style={{ marginLeft: "1rem", opacity: "0" }}>
        Blog Post:10-Custom
      </span>

      <span className="ten-post">
        Blog post:10-custom:n
        <br />
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. Porro, <br />
          suscipit?
        </p>
        <br />
        Sep9, 2022
        <a href='https://www.iofficecorp.com/blog/7-workplace-blogs-you-should-be-reading' target="_blank"> <MdOutlineExpandMore style={{position:'absolute',marginLeft:'8rem',fontSize:'3rem',marginTop:'-1rem'}}/></a>
      </span>

    







      <span className='social'>
     <a href='https://www.linkedin.com/in/abhishek-singh-rana-6354a9180/' target='_blank'> <TiSocialLinkedin className='linkedin'/></a>

     <a href='https://www.instagram.com/__abhisheksinghrana/' target='_blank'> <FaTwitter className='twitter'/></a>

     <a href='https://twitter.com/Abhishe66896161' target='_blank'> <RiInstagramFill className='instagram'/></a>
   
     </span>

    </div>
  );
}
