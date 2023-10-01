import axios from "axios";
import { useEffect, useState } from "react";


const Effect =()=>{
    const [post,setPost]=useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            console.log(res);
            setPost(res.data)
        })
    },[])

return(
    <>
    <ul>
        {
            post.map((data)=>(
                <>
                <li key={data.id}>{data.title} </li>
                <li>{data.id}</li>
                </>
            )
            )
        }

    </ul>
    </>
);


}
export default Effect;