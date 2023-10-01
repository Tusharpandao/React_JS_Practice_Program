import axios from "axios";
import { useEffect, useState } from "react";


const Effect3 =()=>{
    const [post,setPost]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/springrest/searchAll`)
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
                <li key={data.id}>{data.id} </li>
                <li>{data.name}</li>
                <li>{data.email}</li>
                <li>{data.contact}</li>
                <li>{data.address}</li>
                
                </>
            )
            )
        }

    </ul>
    </>
);


}
export default Effect3;