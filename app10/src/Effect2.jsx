import axios from "axios";
import { useEffect, useState } from "react";


const Effect2 =()=>{
    const [post,setPost]=useState([])
    const [id ,setId]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts${id}`)
        .then((res)=>{
            console.log(res);
            setPost(res.data)
        })
    },[id])
    return(
        <>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <h1>{post.title}</h1>
        </>
    );
}
export default Effect2