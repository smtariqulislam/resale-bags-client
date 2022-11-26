import React, { useEffect, useState } from 'react';


const Catorgory = () => {
    const [catorgory,setCatorgory] =useState([])

    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>{
            console.log(data);
            setCatorgory(data);
        })
    },[])


    return (
        <div>

            <h1> data= {catorgory.length}</h1>
            
        </div>
    );
};

export default Catorgory;